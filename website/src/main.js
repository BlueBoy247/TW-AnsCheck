const subjectList = {
    "gsat": [
        ["Chinese","Ch","國文"],["English","En","英文"],
        ["MathA","Ma","數Ａ"],["MathB","Mb","數Ｂ"],
        ["Society","So","社會"],["Science","Sc","自然"]
    ],
    "ast": [
        ["MathI","M1","數甲"],
        ["History","Hi","歷史"],["Geography","Ge","地理"],["Civics","Ci","公民"],
        ["Physics","Ph","物理"],["Chemistry","Cm","化學"],["Biology","Bi","生物"]
    ]
};

function subjectCheck(element, subject, examPrefix){
    const ansBlock = document.getElementById(subject);
    const scoreBlock = document.getElementById(`${examPrefix}-${subject}`);
    if(element.checked){
        // 選擇該考科，顯示該考科對應填答欄位及分數欄位
        ansBlock.style.display="table-row";
        scoreBlock.style.display="table-row";
    }
    else{
        // 取消選擇該考科，隱藏該考科對應填答欄位及分數欄位
        ansBlock.style.display="none";
        scoreBlock.style.display="none";
    }
}

function getJSON(exam ,year){
    const requestURL = `https://tw-anscheck.pages.dev/data/${exam}/${year}.json`;
    const request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    return request;
}

function examYear(year, exam){
    if(year == 0){
        return;
    }
    const request = getJSON(exam, year);
    request.onload = function(){
        let data = "", length = 0, fill0 = "", inputBox = null;
        for(const element of subjectList[exam]){
            data = request.response[element[0]]["Score"]; // 取得分數資訊
            length = data.length;
            for(let i=0;i<length;i++){
                fill0 = i<9 ? "0" : ""; // 題號1~9前面補零
                inputBox = document.getElementById(`${element[1]}-q${fill0}${i+1}`); // id例：Ch-q01、Ch-q12
                inputBox.removeAttribute("style");
                if(data[i] == 0){ // 分數為0表示沒有該題，禁用該輸入框
                    inputBox.setAttribute("disabled",true);
                    inputBox.value = "";
                }else if(inputBox.hasAttribute("disabled")){ // 分數不為0但原本被禁用，重新啟用該輸入框
                    inputBox.removeAttribute("disabled");
                }
            }
        }
        document.getElementById("Ch-w1").removeAttribute("style");
        document.getElementById("Ch-w2").removeAttribute("style");
        document.getElementById("En-w1").removeAttribute("style");
        document.getElementById("En-w2").removeAttribute("style");
    }
    request.onerror = function(){
        alert("取得解答資料時發生錯誤，您可以進行問題反饋，通知開發者進行檢查和修正。");
    }
}

function checkAnswer(exam){
    const year = document.getElementById(`${exam}year`).value;
    if(year == 0){
        document.getElementById(`${exam}year`).style.backgroundColor = "LightPink";
        alert("請選擇年度");
        return;
    }
    document.getElementById(`${exam}year`).style.backgroundColor = "";
    const request = getJSON(exam, year);
    request.onload = function(){
        const data = request.response, sub = document.getElementsByClassName("form-check-input");
        let correctAns = null, scoreData = null, errorMes = "", range = 0;
        for(const element of subjectList[exam]){
            if(sub[exam[0]+element[1]].checked){
                correctAns = data[element[0]]["Ans"];
                scoreData = data[element[0]]["Score"];
                let {score, errorMesReturn} = processSubject(element[2], element[1], correctAns, scoreData);
                errorMes += errorMesReturn;
                if(element[1] == "Ch"){
                    score *= 0.5;
                    let {writingScore, errorMesReturn} = chineseWritng();
                    score += writingScore;
                    errorMes += errorMesReturn;
                }else if(element[1] == "En"){
                    let {writingScore, errorMesReturn} = englishWriting();
                    score += writingScore;
                    errorMes += errorMesReturn;
                }
                range = data[element[0]]["Range"];
                postScore(element[1], score, range, exam);
            }
        }
        if(errorMes!=""){
            alert(errorMes);
        }
    }
    request.onerror = function(){
        alert("取得解答資料時發生錯誤，您可以進行問題反饋，通知開發者進行檢查和修正。");
    }
}

function processSubject(subject, prefix, correctAns, scoreData){
    let score = 0, fill0 = "", ansId = "", ans = "", ansBlock = null, errorMesReturn = "", writingScore = 0;
    let length = correctAns.length;
    for(let i=0;i<length;i++){
        if(scoreData[i]==0){ // 沒有該題
            break;
        }
        fill0 = i<9 ? "0" : "";
        ansId = `${prefix}-q${fill0}${i+1}`;
        ansBlock = document.getElementById(ansId);
        ans = ansBlock.value;
        if(correctAns[i] == "/"){ // 非選題
            writingScore = writingScoreCalculator(ans, scoreData[i], ansBlock);
            if(writingScore == -1){
                errorMesReturn += `${subject}第${i+1}題分數輸入錯誤\n`;
            }else{
                score += writingScore;
            }
        }else if(typeof correctAns[i] == "object"){ // 多選題
            score += multipleScoreCalculator(ans, correctAns[i][1], correctAns[i][0], scoreData[i], ansBlock);
        }else{ // 單選題or選填題
            score += singleScoreCalculator(ans, correctAns[i], scoreData[i], ansBlock);
        }
    }
    return {score, errorMesReturn};
}

function singleScoreCalculator(ans, correctAns, score, ansBlock){ // 單選題&選填題計分
    if(ans == correctAns){ // 答對
        answerBlockColor(ansBlock, "LightGreen")
        return score;
    }else{ // 答錯
        answerBlockColor(ansBlock, "LightPink");
        return 0;
    }
}

function multipleScoreCalculator(ans, correctAns, choiceQuantity, score, ansBlock){ // 多選題計分
    let diff = Array.from(ans).filter((e) => {
        return Array.from(correctAns).indexOf(e) === -1;
    }).concat(Array.from(correctAns).filter((e) => {
        return Array.from(ans).indexOf(e) === -1;
    }));
    if(diff == 0 && ans.length == correctAns.length){ // 答錯選項個數為零且有作答（滿分）
        answerBlockColor(ansBlock, "LightGreen");
        return score;
    }else{
        let multiScore = score * (choiceQuantity - 2 * diff.length) / choiceQuantity;
        if(multiScore > 0 && ans.length > 0){ // 有分數且有作答
            answerBlockColor(ansBlock, "LightYellow");
            return multiScore;
        }
        else{ // 分數低於零分或未作答
            answerBlockColor(ansBlock, "LightPink");
            return 0;
        }
    }
}

function writingScoreCalculator(ans, score, ansBlock){ // 非選題計分
    ans = Number(ans);
    if(ans <= score && ans >= 0){ // 輸入正確
        switch(ans){
            case score: // 滿分
                answerBlockColor(ansBlock, "LightGreen");
                break;
            case 0: // 零分
                answerBlockColor(ansBlock, "LightPink");
                break;
            default: // 有分數
                answerBlockColor(ansBlock, "LightYellow");
                break;
        }
        return ans;
    }else{ // 輸入錯誤
        answerBlockColor(ansBlock, "Red");
        return -1;
    }
}

function answerBlockColor(ansBlock, color){
    ansBlock.style.backgroundColor = color;
}

function chineseWritng(){
    let writingScore = 0, errorMesReturn = "", fullScore = 25;
    for(let i=1;i<=2;i++){
        let ansId = `Ch-w${i}`;
        let ansBlock = document.getElementById(ansId);
        let ans = Number(ansBlock.value);
        if(ans <= fullScore && ans > 0){
            writingScore += ans;
            if(ans == fullScore){
                ansBlock.style.backgroundColor = "LightGreen";
            }else{
                answerBlockColor(ansBlock, "LightYellow");
            }
        }else if(ans > fullScore || ans < 0 || isNaN(ans)){
            errorMesReturn += `國文作文${i}分數輸入錯誤\n`;
            ansBlock.style.backgroundColor = "Red";
        }else{
            ansBlock.style.backgroundColor = "LightPink";
        }
    }
    return {writingScore, errorMesReturn};
}

function englishWriting(){
    let writingScore = 0, errorMesReturn = "", fullScore = [8, 20], i = 1;
    for(const fs of fullScore){
        let ansId = `En-w${i}`;
        let ansBlock = document.getElementById(ansId);
        let ans = Number(ansBlock.value);
        if(ans <= fs && ans > 0){
            writingScore += ans;
            if(ans == fs){
                ansBlock.style.backgroundColor = "LightGreen";
            }else{
                ansBlock.style.backgroundColor = "LightYellow";
            }
        }else if(ans > fs || ans < 0 || isNaN(ans)){
            let item = i==1 ? "翻譯" : "作文";
            errorMesReturn += `英文${item}分數輸入錯誤\n`;
            ansBlock.style.backgroundColor = "Red";
        }else{
            ansBlock.style.backgroundColor = "LightPink";
        }
        i += 1;
    }
    return {writingScore, errorMesReturn};
}

function postScore(prefix, score, range, exam){
    document.getElementById(`or-${prefix}`).innerText = Math.round(score*100) / 100;
    if(exam == "gsat"){
        document.getElementById(`gsat-${prefix}`).innerText = score/range>15 ? 15 : Math.ceil(score/range);
        document.getElementById(`ast-${prefix}`).innerText = score/(range/4)>60 ? 60 : Math.ceil(score/(range/4));
    }else if(exam == "ast"){
        document.getElementById(`ast-${prefix}`).innerText = score/range>60 ? 60 : Math.ceil(score/range);
    }
}