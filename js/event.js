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
//handle by using add eventlisenter
const yellowButton = document.getElementById('make-yellow');
            // console.log(yellowButton);
            yellowButton.addEventListener('click', makeYellow);
            function makeYellow(){
                document.body.style.backgroundColor = 'yellow';
            }
//handal adEventlisenter
const hotPinkButton = document.getElementById('make-hotpink');
// console.log(hotPinkButton);
hotPinkButton.addEventListener('click', function 
(){
    document.body.style.backgroundColor='hotpink';
})
//direct shortcard
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})