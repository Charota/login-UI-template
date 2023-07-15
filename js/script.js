const customCheckbox = document.getElementsByClassName('custom-checkbox')[0];
const inpCheckbox = document.getElementsByClassName('inp-checkbox')[0];

customCheckbox.addEventListener('click', ()=>{
    inpCheckbox.click();
})

const showPassBtn = document.getElementsByClassName('show-pass-btn')[0];
const passInp = document.getElementsByClassName('pass-inp')[0];

console.log(showPassBtn)
console.log(passInp)

console.log(passInp.type)

showPassBtn.addEventListener('click', () => {
    console.log(passInp.firstElementChild.type)
    if(passInp.firstElementChild.type === 'password') {
        passInp.firstElementChild.type = 'text';
    }
    else {
        passInp.firstElementChild.type = 'password';
    }
    
})
