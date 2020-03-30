window.onload = function() {
    let scrollMarginTopStr = 
        getComputedStyle(document.querySelector('.scroll-href')).scrollMarginTop;
    let scrollMarginTop = Number(scrollMarginTopStr.substr(0,scrollMarginTopStr.length-2));
    document.querySelectorAll('.navigation').forEach(nav=>
        nav.addEventListener('click', clickNavigation));
    document.addEventListener('scroll', (e) => onScroll(e, scrollMarginTop));
    document.querySelector('.header__mobile > .header__hamburger')
        .addEventListener('click', clickOpenNavigation);
    document.querySelector('.menu-mobile').addEventListener('click', clickCloseNavigation);
    addEnentPhoneNavigation();
    document.querySelector('.visual-content').addEventListener('click', clickPhone)
    document.querySelector('.gallery-filters').addEventListener('click', clickGalleryFilters)
    document.querySelector('.gallery-images').addEventListener('click', clickGalleryImage)
    document.querySelector('.quote__form').addEventListener('submit', clickQuoteButton)
    document.querySelector('.overlay_modal-quote').addEventListener('click', clickModal)
}

const addEnentPhoneNavigation = () => {
    document.querySelector('.visual-content').addEventListener('click', clickPhoneNavigation)
    let navigations = document.querySelectorAll('.navigation__icon');
    let slides = document.querySelectorAll('.slide');
    slides.forEach(slide=>
        slide.addEventListener('animationend', (e) => {
            let slide = e.currentTarget;
            navigations.forEach(navigation => navigation.classList.remove('slide-is-moving'));
            if(slide.classList.contains("slide-move-center-to-left")){
                slide.classList.remove("slide-move-center-to-left");
                slide.classList.add("slide_hidden");
            }else{
                slide.classList.remove("slide-move-right-to-center");
            }
            if(slide.classList.contains("slide-move-center-to-right")){
                slide.classList.remove("slide-move-center-to-right");
                slide.classList.add("slide_hidden");
            }else{
                slide.classList.remove("slide-move-left-to-center");
            }
    }));
}

//#region Header
const clickNavigation = (e) => {
    changeActive(e, 'navigation-link__text', 'navigation-link_active');
}

const onScroll = (e, scrollMarginTop) => {
    let currentPosition = window.scrollY;
    setHeaderSmall(currentPosition, 
        [document.querySelector('.header-content'),
         document.querySelector('.menu-mobile__header')]
         );

    let anchors = document.querySelectorAll('.anchor');
    let navigationLinks = document.querySelectorAll('.navigation-link>a');
    const navigationLinksUnique = 5;
    for(let i=0; i<anchors.length; i++){
        if(currentPosition + scrollMarginTop < anchors[i].offsetTop + anchors[i].offsetHeight){
            if(!navigationLinks[i].classList.contains('navigation-link_active')){
                document.querySelectorAll('.navigation-link_active').forEach(linkActive=>
                    linkActive.classList.remove('navigation-link_active'));
                setActive(navigationLinks[i], 'navigation-link_active');
                setActive(navigationLinks[i+navigationLinksUnique], 'navigation-link_active');
            }
            return;
        }
    }
}

setHeaderSmall = (currentPosition, elements) => {
    let isHeaderSmall = elements[0].classList.contains('header-content_small');
    if(currentPosition==0 && isHeaderSmall){
        elements.forEach(el=>el.classList.remove('header-content_small'));
    }else if(currentPosition>0 && !isHeaderSmall){
        elements.forEach(el=>el.classList.add('header-content_small'));
    }
}

const clickOpenNavigation = (e) => {
    let blockNavigation = document.querySelector('.menu-mobile');
    blockNavigation.classList.remove('menu-mobile_hidden');
}

const clickCloseNavigation = (e) => {
    if(!e.target.classList.contains('layout'))
        e.currentTarget.classList.add('menu-mobile_hidden');
}
//#endregion Header

//#region VisualContent
const clickPhoneNavigation = (e) => {
    if(e.target.classList.contains('navigation__icon')){
        let isMoveLeft = e.target.classList.contains('navigation__icon_left');
        // changePhoneScreen(isMoveLeft);
        chageSlides(isMoveLeft);
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

const chageSlides = (isLeft) => {
    let move = isLeft ? 
        {from:'slide-move-center-to-left', to: 'slide-move-right-to-center'} :
        {from:'slide-move-center-to-right', to: 'slide-move-left-to-center'};

    let visual = document.querySelector('#header');
    let firstIsActive = visual.classList.contains('background-visual_first');
    if(firstIsActive) {
        visual.classList.remove('background-visual_first');
        visual.classList.add('background-visual_second');
    }else{
        visual.classList.remove('background-visual_second');
        visual.classList.add('background-visual_first');
    }
    
    let navigations = document.querySelectorAll('.navigation__icon');
    let slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        navigations.forEach(navigation => navigation.classList.add('slide-is-moving'));
        if(slide.classList.contains('slide_hidden')){
            slide.classList.add(move.to);
            slide.classList.remove("slide_hidden");
        }
        else{
            slide.classList.add(move.from);
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
//#endregion VisualContent

//#region Portfolio
const clickGalleryFilters = (e) => {
    changeActive(e, 'gallery__tag', 'tag_ative', 
        () => { changeGalary(e.currentTarget, e.target.innerText); });
}

const changeGalary = (blockFilters, setFilter) => {
    let galleryImages = blockFilters.closest('.gallery').querySelector('.gallery-images');

    let images = Array.from(galleryImages.children);
    images = images.sort(function(){
        return Math.random() - 0.5;
      });
    images.forEach(image=>galleryImages.append(image));

    // простое выполнение задания(переставляем первый элемент в конец):
    // galleryImages.append(galleryImages.children[0]);
}

const clickGalleryImage = (e) => {  
    let img = e.target.classList.contains('gallery-image__src') ?
        {
            currentTarget: e.currentTarget,
            target: e.target.parentElement
        } :
        e;
    
    changeActive(img, 'gallery-image', 'gallery-image_active');
}
//#endregion Portfolio

//#region Quote
const clickQuoteButton = (e) => {
    setQuoteTheme();
    setQuoteDesc();
    showQuoteModal();
    clearQueryForm();

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
const clearQueryForm = () => {
    let form = document.querySelector('.quote__form');
    form.reset();
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