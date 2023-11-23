//get text from textarea
let inputText = document.getElementById("thm").innerHTML;

//splite new line by regex
  let newLineArr = inputText.split(/\n/g)

//find length
let newLineArrLen = newLineArr.length;
//make variable
let HTMLTableOutput = "";
// looping for create new line on display
for (let i = 0; i < newLineArrLen; i++) {
  HTMLTableOutput += "<tr><td>" + newLineArr[i] + "</td></tr>" + "\n";
}
//replace comma with table tag form
HTMLTableOutput = HTMLTableOutput.replace(/<tr><td>\(([^ )]*)\)<\/td><\/tr>/g, '$1<table>');
HTMLTableOutput = HTMLTableOutput.replace(/ /g, "</td><td>");
HTMLTableOutput = HTMLTableOutput.replace(/1/g, 'ด');
HTMLTableOutput = HTMLTableOutput.replace(/2/g, 'ร');
HTMLTableOutput = HTMLTableOutput.replace(/3/g, 'ม');
HTMLTableOutput = HTMLTableOutput.replace(/4/g, 'ฟ');
HTMLTableOutput = HTMLTableOutput.replace(/5/g, 'ซ');
HTMLTableOutput = HTMLTableOutput.replace(/6/g, 'ล');
HTMLTableOutput = HTMLTableOutput.replace(/7/g, 'ท');
HTMLTableOutput = HTMLTableOutput.replace(/7/g, 'ท');
HTMLTableOutput = HTMLTableOutput.replace(/8/g, 'ดํ');
HTMLTableOutput = HTMLTableOutput.replace(/9/g, 'รํ');
// HTMLTableOutput = HTMLTableOutput.replace(/\+/g, 'มํ');
HTMLTableOutput = HTMLTableOutput.replace(/\*/g, 'ํ');
HTMLTableOutput = HTMLTableOutput.replace(/\./g, 'ฺ');
HTMLTableOutput = HTMLTableOutput.replace(/\\s/g, ' ');
//คันชักออก
HTMLTableOutput = HTMLTableOutput.replace(/\{([ดรมฟซลท])/g, '<span style=\"display: inline-block; position: relative;\">$1<sub style=\"position: absolute; bottom: -0.5em; left: 50%; transform: translateX(-50%);\"><</sub></span>');
//คันชักเข้า
HTMLTableOutput = HTMLTableOutput.replace(/\}([ดรมฟซลท])/g, '<span style=\"display: inline-block; position: relative;\">$1<sub style=\"position: absolute; bottom: -0.5em; left: 50%; transform: translateX(-50%);\">></sub></span>');
//เครื่องหมายโน้ตบวก
HTMLTableOutput = HTMLTableOutput.replace(/\+([ดรมฟซลท])/g, '<span style=\"display: inline-block; position: relative;\">$1<sub style=\"position: absolute; bottom: 0.7em; left: 50%; transform: translateX(-50%);\">+</sub></span>');
//เครื่อหมายโน้ตลบ
HTMLTableOutput = HTMLTableOutput.replace(/\_([ดรมฟซลท])/g, '<span style=\"display: inline-block; position: relative;\">$1<sub style=\"position: absolute; bottom: 0.7em; left: 50%; transform: translateX(-50%);\">-</sub></span>');
//เครื่องหมายโน้ตกลาง
HTMLTableOutput = HTMLTableOutput.replace(/\o([ดรมฟซลท])/g, '<span style=\"display: inline-block; position: relative;\">$1<sub style=\"position: absolute; bottom: 0.6em; left: 50%; transform: translateX(-50%);\">º</sub></span>');

HTMLTableOutput = HTMLTableOutput.replace(/<tr><td><\/td><\/tr>/g, '<\/table><br><table>');

if (HTMLTableOutput !== "<tr><td></td></tr>\n") {
  document.getElementById('thm').innerHTML =
    "<table style=&#34width:100%&#34>\n" + HTMLTableOutput + "</table>";
  }
