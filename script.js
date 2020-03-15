window.onload = function() {
    console.log('run script')

    this.document.querySelector('.navigation').addEventListener('click', clickNavigation)
    this.document.querySelector('.visual-content').addEventListener('click', clickPhoneNavigation)
    this.document.querySelector('.visual-content').addEventListener('click', clickPhone)
}

const clickNavigation = (e) => {
    if(e.target.classList.contains('navigation-link__text')){
        if(e.target.classList.contains('navigation-link_active')){
            return;
        }
        removeActive(e.currentTarget, 'navigation-link_active');
        setActive(e.target, 'navigation-link_active');
    }
}

const clickPhoneNavigation = (e) => {
    if(e.target.classList.contains('navigation__icon')){
        let isMoveLeft = e.target.classList.contains('navigation__icon_left');
        changePhoneScreen(isMoveLeft);
    }
}

const clickPhone = (e) => {
    if(e.target.classList.contains('phone__base')){
        changePhonePower(e.target);
    }
}

const removeActive = (container, classActiveName) => {
    let el = container.querySelector(`.${classActiveName}`);
    el.classList.remove(classActiveName);
}
const setActive = (target, classActiveName) => {
    target.classList.add(classActiveName);
}

const changePhoneScreen = (isLeft) => {
    let screens = document.querySelectorAll('.phone__screen');
    screens.forEach(screen => {
        //если будет больше двух изображений, то необходимо будет смотреть в какую сторону листать
        if(screen.classList.contains('phone__screen-1')){
            screen.classList.remove('phone__screen-1');
            screen.classList.add('phone__screen-2');
        }else{
            screen.classList.remove('phone__screen-2');
            screen.classList.add('phone__screen-1');
        }
    })
}

const changePhonePower = (phoneBase) => {
    let phoneScreen = phoneBase.closest('.phone').querySelector('.phone__screen');
    if(phoneScreen.classList.contains('phone__screen-off')){
        phoneScreen.classList.remove('phone__screen-off');
    }else{
        phoneScreen.classList.add('phone__screen-off');
    }
}