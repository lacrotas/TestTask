const navigation = document.querySelector('.header_navigation-small');
let active = false;
document.querySelector('.openModal').addEventListener('click', function () {
    if (!active) {
        navigation.style.left = 0;
        active = true;
        document.querySelector('.openModal').src = "./Assets/image/close.svg";
    } else {
        active = false;
        navigation.style.left = -1000 + "px";
        document.querySelector('.openModal').src = "./Assets/image/setting.svg";
    }
});
navigation.addEventListener('click', function () {
    active = false;
    navigation.style.left = -1000 + "px";
    document.querySelector('.openModal').src = "./Assets/image/setting.svg";
});

// personal office

const modalWindowPersonal = document.querySelector('.modal_menu');
let activePersonal = false;
document.querySelector('.icon_item-people').addEventListener('click', function () {
    if (!activePersonal) {
        if (document.body.clientWidth < 1000) {
            modalWindowPersonal.style.right = 0 + 'px';
        }else{
        modalWindowPersonal.style.right = 319 + 'px';
        }
        activePersonal = true;
    } else {
        activePersonal = false;
        modalWindowPersonal.style.right = -1000 + "px";
    }
});
modalWindowPersonal.addEventListener('click', function () {
    activePersonal = false;
    navigation.style.left = -1000 + "px";
});