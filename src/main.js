function gsatCheck(ge,gSub){
    const gSubBlock = document.getElementById(gSub);
    const gSubScore = document.getElementById("GS-"+gSub);
    if(ge.checked){
        gSubBlock.style.display="table-row";
        gSubScore.style.display="table-row";
    }
    else{
        gSubBlock.style.display="none";
        gSubScore.style.display="none";
    }
}
function astCheck(ae,aSub){
    const aSubBlock = document.getElementById(aSub);
    const aSubScore = document.getElementById("AS-"+aSub);
    if(ae.checked){
        aSubBlock.style.display="table-row";
        aSubScore.style.display="table-row";
    }
    else{
        aSubBlock.style.display="none";
        aSubScore.style.display="none";
    }
}

function gsatYear(gYear){
    if(gYear == 0){
        return;
    }
    const requestURL = 'https://tw-anscheck.pages.dev/data/gsat/'+gYear+'.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function(){
        let sData = request.response['Chinese']['Score'];
        let fill0 = '';
        for(let i=0;i<sData.length-2;i++){
            fill0 = i<9 ? '0' : '';
            if(sData[i] == 0){
                document.getElementById("Ch-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("Ch-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("Ch-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
        sData = request.response['English']['Score'];
        for(let i=0;i<sData.length-2;i++){
            fill0 = i<9 ? '0' : '';
            if(sData[i] == 0){
                document.getElementById("En-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("En-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("En-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
        sData = request.response['MathA']['Score'];
        for(let i=0;i<sData.length;i++){
            fill0 = i<9 ? '0' : '';
            if(sData[i] == 0){
                document.getElementById("Ma-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("Ma-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("Ma-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
        sData = request.response['MathB']['Score'];
        for(let i=0;i<sData.length;i++){
            fill0 = i<9 ? '0' : '';
            if(sData[i] == 0){
                document.getElementById("Mb-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("Mb-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("Mb-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
        sData = request.response['Society']['Score'];
        for(let i=0;i<sData.length;i++){
            fill0 = i<9 ? '0' : '';
            if(sData[i] == 0){
                document.getElementById("So-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("So-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("So-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
        sData = request.response['Science']['Score'];
        for(let i=0;i<sData.length;i++){
            fill0 = i<9 ? '0' : '';
            if(sData[i] == 0){
                document.getElementById("Sc-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("Sc-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("Sc-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
    }
}
function astYear(aYear){
    if(aYear == 0){
        return;
    }
    const requestURL = location.href+'data/ast/'+aYear+'.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function(){
        let aData = request.response['MathI']['Score'];
        let fill0 = '';
        for(let i=0;i<aData.length;i++){
            fill0 = i<9 ? '0' : '';
            if(aData[i] == 0){
                document.getElementById("M1-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("M1-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("M1-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
        aData = request.response['History']['Score'];
        for(let i=0;i<aData.length;i++){
            fill0 = i<9 ? '0' : '';
            if(aData[i] == 0){
                document.getElementById("Hi-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("Hi-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("Hi-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
        aData = request.response['Geography']['Score'];
        for(let i=0;i<aData.length;i++){
            fill0 = i<9 ? '0' : '';
            if(aData[i] == 0){
                document.getElementById("Ge-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("Ge-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("Ge-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
        aData = request.response['Civics']['Score'];
        for(let i=0;i<aData.length;i++){
            fill0 = i<9 ? '0' : '';
            if(aData[i] == 0){
                document.getElementById("Ci-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("Ci-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("Ci-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
        aData = request.response['Physics']['Score'];
        for(let i=0;i<aData.length;i++){
            fill0 = i<9 ? '0' : '';
            if(aData[i] == 0){
                document.getElementById("Ph-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("Ph-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("Ph-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
        aData = request.response['Chemistry']['Score'];
        for(let i=0;i<aData.length;i++){
            fill0 = i<9 ? '0' : '';
            if(aData[i] == 0){
                document.getElementById("Cm-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("Cm-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("Cm-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
        aData = request.response['Biology']['Score'];
        for(let i=0;i<aData.length;i++){
            fill0 = i<9 ? '0' : '';
            if(aData[i] == 0){
                document.getElementById("Bi-q"+fill0+(i+1)).setAttribute('disabled',true);
            }else if(document.getElementById("Bi-q"+fill0+(i+1)).hasAttribute('disabled')){
                document.getElementById("Bi-q"+fill0+(i+1)).removeAttribute('disabled');
            }
        }
    }
}

function gsatAnswer(){
    const year = document.getElementById("gsatyear").value;
    if(year == 0){
        document.getElementById("gsatyear").style.backgroundColor = "LightPink";
        alert("請選擇年度");
        return;
    }
    const requestURL = location.href+'data/gsat/'+year+'.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function(){
        const data = request.response;
        const sub = document.getElementsByClassName("form-check-input");
        let correctAns = null;
        let scoreData = null;
        let score = 0;
        let fill0 = '';
        let ansId = '';
        let ans = '';
        let ansBlock = null;
        let multi = 0;
        let multiScore = 0;
        let range = 0;
        let errorMes = ''
        if(sub['gCh'].checked){
            correctAns = data['Chinese']['Ans'];
            scoreData = data['Chinese']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length-2;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'Ch-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "國文第"+(i+1)+"題分數輸入錯誤\n";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            score = score*0.5;
            for(let i=0;i<2;i++){
                ansId = 'Ch-w'+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = Number(ansBlock.value);
                if(ans == scoreData[40+i]){
                    score += scoreData[40+i];
                    ansBlock.style.backgroundColor = "LightGreen";
                }else if(ans < scoreData[40+i] && ans > 0){
                    score += ans;
                    ansBlock.style.backgroundColor = "LightYellow";
                }else if(ans > scoreData[i] || ans < 0){
                    errorMes += "國文作文"+(i+1)+"分數輸入錯誤\n";
                }else{
                    ansBlock.style.backgroundColor = "LightPink";
                }
            }
            range = data['Chinese']['Range'];
            document.getElementById("or-Ch").innerText = score;
            document.getElementById("gsat-Ch").innerText = score/range>15?15:Math.ceil(score/range);
            document.getElementById("ast-Ch").innerText = score/(range/4)>60 ? 60 : Math.ceil(score/(range/4));
        }
        if(sub['gEn'].checked){
            correctAns = data['English']['Ans'];
            scoreData = data['English']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length-2;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'En-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "英文第"+(i+1)+"題分數輸入錯誤\n";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            for(let i=0;i<2;i++){
                ansId = 'En-w'+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = Number(ansBlock.value);
                if(ans == scoreData[50+i]){
                    score += scoreData[50+i];
                    ansBlock.style.backgroundColor = "LightGreen";
                }else if(ans < scoreData[50+i] && ans > 0){
                    score += ans;
                    ansBlock.style.backgroundColor = "LightYellow";
                }else if(ans > scoreData[i] || ans < 0){
                    errorMes += "英文手寫第"+(i+1)+"題分數輸入錯誤\n";
                }else{
                    ansBlock.style.backgroundColor = "LightPink";
                }
            }
            range = data['English']['Range'];
            document.getElementById("or-En").innerText = score;
            document.getElementById("gsat-En").innerText = score/range>15?15:Math.ceil(score/range);
            document.getElementById("ast-En").innerText = score/(range/4)>60 ? 60 : Math.ceil(score/(range/4));
        }
        if(sub['gMa'].checked){
            correctAns = data['MathA']['Ans'];
            scoreData = data['MathA']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'Ma-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "數學第"+(i+1)+"題分數輸入錯誤\n";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            range = data['MathA']['Range'];
            document.getElementById("or-Ma").innerText = score;
            document.getElementById("gsat-Ma").innerText = score/range>15?15:Math.ceil(score/range);
            document.getElementById("ast-Ma").innerText = score/(range/4)>60 ? 60 : Math.ceil(score/(range/4));
        }
        if(sub['gMb'].checked){
            correctAns = data['MathB']['Ans'];
            scoreData = data['MathB']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'Mb-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "數學第"+(i+1)+"題分數輸入錯誤\n";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            range = data['MathB']['Range'];
            document.getElementById("or-Mb").innerText = score;
            document.getElementById("gsat-Mb").innerText = score/range>15?15:Math.ceil(score/range);
            document.getElementById("ast-Mb").innerText = score/(range/4)>60 ? 60 : Math.ceil(score/(range/4));
        }
        if(sub['gSo'].checked){
            correctAns = data['Society']['Ans'];
            scoreData = data['Society']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'So-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "社會第"+(i+1)+"題分數輸入錯誤\n";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            range = data['Society']['Range'];
            document.getElementById("or-So").innerText = score;
            document.getElementById("gsat-So").innerText = score/range>15?15:Math.ceil(score/range);
            document.getElementById("ast-So").innerText = score/(range/4)>60 ? 60 : Math.ceil(score/(range/4));
        }
        if(sub['gSc'].checked){
            correctAns = data['Science']['Ans'];
            scoreData = data['Science']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'Sc-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "自然第"+(i+1)+"題分數輸入錯誤";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            range = data['Science']['Range'];
            document.getElementById("or-Sc").innerText = score;
            document.getElementById("gsat-Sc").innerText = score/range>15?15:Math.ceil(score/range);
            document.getElementById("ast-Sc").innerText = score/(range/4)>60 ? 60 : Math.ceil(score/(range/4));
        }
        if(errorMes!=''){
            alert(errorMes);
        }
    }
}
function astAnswer(){
    const year = document.getElementById("astyear").value;
    if(year == 0){
        document.getElementById("astyear").style.backgroundColor = "LightPink";
        alert("請選擇年度");
        return;
    }
    const requestURL = location.href+'data/ast/'+year+'.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function(){
        const data = request.response;
        const sub = document.getElementsByClassName("form-check-input");
        let correctAns = null;
        let scoreData = null;
        let score = 0;
        let fill0 = '';
        let ansId = '';
        let ans = '';
        let ansBlock = null;
        let range = 0;
        let errorMes = ''
        if(sub['aM1'].checked){
            correctAns = data['MathI']['Ans'];
            scoreData = data['MathI']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'M1-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "數甲第"+(i+1)+"題分數輸入錯誤\n";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            range = data['MathI']['Range'];
            document.getElementById("or-M1").innerText = score;
            document.getElementById("ast-M1").innerText = score/range>60 ? 60 : Math.ceil(score/range);
        }
        if(sub['aHi'].checked){
            correctAns = data['History']['Ans'];
            scoreData = data['History']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'Hi-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "歷史第"+(i+1)+"題分數輸入錯誤\n";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            range = data['History']['Range'];
            document.getElementById("or-Hi").innerText = score;
            document.getElementById("ast-Hi").innerText = score/range>60 ? 60 : Math.ceil(score/range);
        }
        if(sub['aGe'].checked){
            correctAns = data['Geography']['Ans'];
            scoreData = data['Geography']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'Ge-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "地理第"+(i+1)+"題分數輸入錯誤\n";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            range = data['Geography']['Range'];
            document.getElementById("or-Ge").innerText = score;
            document.getElementById("ast-Ge").innerText = score/range>60 ? 60 : Math.ceil(score/range);
        }
        if(sub['aCi'].checked){
            correctAns = data['Civics']['Ans'];
            scoreData = data['Civics']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'Ci-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "公民第"+(i+1)+"題分數輸入錯誤\n";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            range = data['Civics']['Range'];
            document.getElementById("or-Ci").innerText = score;
            document.getElementById("ast-Ci").innerText = score/range>60 ? 60 : Math.ceil(score/range);
        }
        if(sub['aPh'].checked){
            correctAns = data['Physics']['Ans'];
            scoreData = data['Physics']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'Ph-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "物理第"+(i+1)+"題分數輸入錯誤\n";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            range = data['Physics']['Range'];
            document.getElementById("or-Ph").innerText = score;
            document.getElementById("ast-Ph").innerText = score/range>60 ? 60 : Math.ceil(score/range);
        }
        if(sub['aCm'].checked){
            correctAns = data['Chemistry']['Ans'];
            scoreData = data['Chemistry']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'Cm-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "化學第"+(i+1)+"題分數輸入錯誤";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            range = data['Chemistry']['Range'];
            document.getElementById("or-Cm").innerText = score;
            document.getElementById("ast-Cm").innerText = score/range>60 ? 60 : Math.ceil(score/range);
        }
        if(sub['aBi'].checked){
            correctAns = data['Biology']['Ans'];
            scoreData = data['Biology']['Score'];
            score = 0;
            for(let i=0;i<correctAns.length;i++){
                if(scoreData[i]==0){
                    break;
                }
                fill0 = i<9 ? '0' : '';
                ansId = 'Bi-q'+fill0+(i+1);
                ansBlock = document.getElementById(ansId);
                ans = ansBlock.value;
                if(correctAns[i] != "/"){
                    if(typeof correctAns[i] == 'object'){
                        multi = 0;
                        for(let j=0;j<ans.length;j++){
                            for(let k=0;k<correctAns[i][1].length;k++){
                                if(ans[j]==correctAns[i][1][k]){
                                    multi += 1;
                                    break;
                                }
                            }
                        }
                        if(multi == correctAns[i][1].length){
                            score += scoreData[i];
                            ansBlock.style.backgroundColor = "LightGreen";
                        }else if(multi > 0){
                            multiScore = correctAns[i][0]>2*Math.abs(correctAns[i][1].length-multi) ? scoreData[i]*(correctAns[i][0]-2*Math.abs(correctAns[i][1].length-multi)) : 0;
                            multiScore /= correctAns[i][0];
                            score += multiScore;
                            correctAns[i][0]>2*Math.abs(correctAns[i][1].length-1-multi) ? ansBlock.style.backgroundColor = "LightYellow" : ansBlock.style.backgroundColor = "LightPink";
                        }else{
                            ansBlock.style.backgroundColor = "LightPink";
                        }
                    }else if(correctAns[i] == ans){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }else{
                    if(ans == scoreData[i]){
                        score += scoreData[i];
                        ansBlock.style.backgroundColor = "LightGreen";
                    }else if(ans < scoreData[i] && ans > 0){
                        score += Number(ans);
                        ansBlock.style.backgroundColor = "LightYellow";
                    }else if(ans > scoreData[i] || ans < 0){
                        errorMes += "自然第"+(i+1)+"題分數輸入錯誤";
                    }else{
                        ansBlock.style.backgroundColor = "LightPink";
                    }
                }
            }
            range = data['Biology']['Range'];
            document.getElementById("or-Bi").innerText = score;
            document.getElementById("ast-Bi").innerText = score/range>60 ? 60 : Math.ceil(score/range);
        }
        if(errorMes!=''){
            alert(errorMes);
        }
    }
}

