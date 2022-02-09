function makBlack() {
    document.body.style.backgroundColor = 'Black';
}
// handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
//anonymous Function function/
const greenButton=document.getElementById('make-green-button')
greenButton.onclick=function makeGreen(){
    document.body.style.backgroundColor='green';
}