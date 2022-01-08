const unitInput = document.querySelector('.unitInput');
const convertBtnKM = document.querySelector('.convertBtnToKM')
const resultNumber = document.querySelector('.resultNumber');



const convertUnitToKM = () => {
    let x = unitInput.value
    y = x * 0.62137;
    console.log(y)
    resultNumber.textContent = `${x} mile = ${y} km`
}


convertBtnKM.addEventListener('click', convertUnitToKM)