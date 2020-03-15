window.onload = function() {
    console.log('run script')

    document.querySelector('.navigation').addEventListener('click', clickNavigation)
    document.querySelector('.visual-content').addEventListener('click', clickPhoneNavigation)
    document.querySelector('.visual-content').addEventListener('click', clickPhone)
    document.querySelector('.gallery-filters').addEventListener('click', clickGalleryFilters)
    document.querySelector('.gallery-images').addEventListener('click', clickGalleryImage)
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