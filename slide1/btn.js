const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const container = document.querySelector('.container')

function handleClickBtn1(){
    container.style.transform = '';
}

function handleClickBtn2(){
    container.style.transform = 'translate(-100vw)';
}

function handleClickBtn3(){
    container.style.transform = 'translate(-200vw)';
}


btn1.addEventListener("click", handleClickBtn1)
btn2.addEventListener("click", handleClickBtn2)
btn3.addEventListener("click", handleClickBtn3)

Init();