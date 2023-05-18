const number_input = document.querySelector('.number_input');
const name_input = document.querySelector('.name_input');
const comment_input = document.querySelector('.comment_input');

document.querySelector('.contact_button').addEventListener('click', function () {
    if(hasNumber(name_input.value)){
        alert('В имени не дожно содержаться цифр');
        name_input.style.border  = "2px solid red";
    }
    if(isValidNumber(number_input.value)){
        alert('Неверный номер');
        name_input.style.border  = "2px solid red";
    }
    if(!hasNumber(name_input.value) && !isValidNumber(number_input.value) && name_input.value != undefined && number_input.value != undefined){
        name_input.value = '';
        number_input.value = '';
        comment_input.value = '';
        name_input.style.border  = "1.5px solid rgba(242, 242, 242, 0.5)";
        alert('форма отправлена');
    }else{
        alert('заполните пустые поля');
    }
});

function hasNumber(myString) {
    return /\d/.test(myString);
}
function isValidNumber(p) {
    if(p==''){return }
    return /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(p);
  }