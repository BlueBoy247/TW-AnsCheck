# 臺灣升學考試對答網
升學考試成績單只會給等級或級分，不會給原始分數，但拿著官網的解答一題一題對答算分，既麻煩又有答案對錯、分數算錯的可能，本網站正是為解決此不便而誕生。

## 使用說明
請依下方說明及參考下方範例進行填答，否則可能導致最終核對結果有誤。
* 單選題部分：請將填寫之選項填入對應題號的填答框。如填寫之選項為A，則填答為：`A`。
* 多選題部分：請將填寫之選項填入對應題號的填答框，選項間無須逗號分隔。如填寫之選項為BCE，則填答為：`BCE`。
* 選填題部分：請將填寫之答案填入對應題號的填答框，答案間無須逗號分隔。如填寫之答案為-,3,3，則填答為：`-33`。
* 非選題部分：請將得分填入對應題號的填答框。如該題得到6分，則填答為：`6`或`6.0`。

## 問題反饋
如您使用本網站時遇到任何問題，可採取以下方式：

1. 至本專案之GitHub repo提出issue，[請點此提交new issue](https://github.com/BlueBoy247/TW-AnsCheck/issues/)（需有GitHub帳號）
2. 寄信至[uudenden.fly+ongithub@gmail.com](mailto:uudenden.fly+ongithub@gmail.com)，主旨請填「臺灣升學考試對答網-問題反饋」
3. 至我的個人網站填寫[聯絡表單](https://blueboy247.github.io/about/#form)，聯絡目的請選「一般聯絡」

## 協助更新
因為升學考試每年皆有舉辦，每年都須製作應屆JSON檔案，若您願意協助製作，可採取以下方式：

1. 將完成的檔案寄至[uudenden.fly+ongithub@gmail.com](mailto:uudenden.fly+ongithub@gmail.com)，主旨請填「臺灣升學考試對答網-JSON資料」
2. 將本專案fork至您的個人GitHub，添加新的JSON檔後進行Pull Request（需有GitHub帳號）

JSON檔案模板[請點此](https://github.com/BlueBoy247/TW-AnsCheck/tree/main/templates)。

### JSON檔案說明
單選題答案為字串形式，範例：`"A"`。<br>
多選題答案為陣列形式，第0項為該題選項數量（整數形式），後面為按A-Z、0-9順序排列的答案（字串形式），範例：`[6,"BCF"]`、`[5,"23"]`。<br>
選填題答案為字串形式，範例：`"-33"`、`"1445"`。<br>
非選題請輸入`"/"`，多餘的選項維持`""`、分數維持0分即可即可。

## 贊助專案
如您願意贊助本專案，[請點此](https://paypal.me/blueboy2472779)。欲指定贊助款項用途，請於說明欄填寫「贊助臺灣升學考試對答網」。

## 相關連結
* [大學入學考試中心官網](https://www.ceec.edu.tw/)
* [國中教育會考官網](https://cap.rcpet.edu.tw/)
### 本站使用資源
* Favicon: [Taiwan icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/taiwan)