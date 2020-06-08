const colorBtn=document.querySelector('.button');
const bodyBcg=document.querySelector('body');

const colors=['yellow','red','green','black','purple','orange','violet','brown'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){

    let random=Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor=colors[random];


}