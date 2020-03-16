window.onload = function() {
    document.querySelector('.navigation').addEventListener('click', clickNavigation)
    document.querySelector('.visual-content').addEventListener('click', clickPhoneNavigation)
    document.querySelector('.visual-content').addEventListener('click', clickPhone)
    document.querySelector('.gallery-filters').addEventListener('click', clickGalleryFilters)
    document.querySelector('.gallery-images').addEventListener('click', clickGalleryImage)
    document.querySelector('.quote-button').addEventListener('click', clickQuoteButton)
    document.querySelector('.overlay_modal-quote').addEventListener('click', clickModal)
}

//#region Header
const clickNavigation = (e) => {
    changeActive(e, 'navigation-link__text', 'navigation-link_active');
}
//#endregion Header

//#region VisualContent
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

const changePhoneScreen = (isLeft) => {
    let screens = document.querySelectorAll('.phone__screen');
    screens.forEach(screen => {
        let currentNumberScreen = screen.classList.contains('phone__screen-1') ? 1 : 
            screen.classList.contains('phone__screen-2') ? 2 : 3;

        screen.classList.remove('phone__screen-' + currentNumberScreen);
        let nextNumber;
        if(isLeft){
            nextNumber = currentNumberScreen - 1;
            if(nextNumber === 0){
                nextNumber = 3;
            }
        }else{
            nextNumber = currentNumberScreen + 1;
            if(nextNumber === 4){
                nextNumber = 1;
            }
        }
        screen.classList.add('phone__screen-' + nextNumber);
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
//#endregion VisualContent

//#region Portfolio
const clickGalleryFilters = (e) => {
    changeActive(e, 'gallery__tag', 'tag_ative', 
        () => { changeGalary(e.currentTarget, e.target.innerText); });
}

const changeGalary = (blockFilters, setFilter) => {
    let galleryImages = blockFilters.closest('.gallery').querySelector('.gallery-images');
    let images = galleryImages.children;
    //TODO Сделать сортировку с помощью массивов
    // let array = [].slice.call(images);
    // let el = array[1];
    // array.splice(el, 1);
    // array.push(el);

    galleryImages.append(images[0]);
}

const clickGalleryImage = (e) => {  
    changeActive(e, 'gallery-image', 'gallery-image_active');
}
//#endregion Portfolio

//#region Quote
const clickQuoteButton = (e) => {
    setQuoteTheme();
    setQuoteDesc();
    showQuoteModal();

    e.preventDefault();
}

const clickModal = (e) => {
    if(e.target.classList.contains('modal-quote__button-ok') || 
        e.target.classList.contains('overlay')){
        hideQuoteModal();
    }
}

const setQuoteTheme = (e) => {
    let modalTheme = document.querySelector('.modal-quote__theme');
    let theme = document.querySelector('.quote__subject');
    modalTheme.innerHTML = theme.value?`Тема: ${theme.value}`:'Без темы';
}
const setQuoteDesc = (e) => {
    let modalDesc = document.querySelector('.modal-quote__desc');
    let desc = document.querySelector('.quote__describe');
    modalDesc.innerHTML = desc.value?`Описание: ${desc.value}`:'Без описания';
}
const showQuoteModal = (e) => {
    let modal = document.querySelector('.overlay_modal-quote');
    modal.classList.remove('modal_hidden');
}
const hideQuoteModal = (e) => {
    let modal = document.querySelector('.overlay_modal-quote');
    modal.classList.add('modal_hidden');
}

//#endregion Quote

//#region Base
const changeActive = (e, classElement, classActiveElement, success) => {
    let target = e.target;
    if(target.classList.contains(classElement)){
        if(target.classList.contains(classActiveElement)){
            return;
        }
        removeActive(e.currentTarget, classActiveElement);
        setActive(target, classActiveElement);
        success && success();
    }
}

const removeActive = (container, classActiveName) => {
    let el = container.querySelector(`.${classActiveName}`);
    el &&
    el.classList.remove(classActiveName);
}
const setActive = (target, classActiveName) => {
    target.classList.add(classActiveName);
}
//#endregion Base