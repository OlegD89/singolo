# singolo

Развёрнутый сайт для проверки: https://olegd89.github.io/singolo/













# Singolo. Responsive



Задача будет выполняться на основе сделанной ранее страницы Singolo DOM. 
- [x] К этому моменту должен быть подключен `script.js`. В этом задании будет оцениваться вид верстки на 4х размерах экрана.
1) 1020px <= width
2) 768px <= width < 1020px
3) 375px <= width < 768px
4) width < 375px

**[Макет figma Singolo](https://www.figma.com/file/HfBfQdMpn9X9FMPeocJGis/Singolo)**  
- [x] ❗ Макет имеет заключительный дизайн. Если вы использовали версию макета до 19.03.2020, обновите, пожалуйста.  
  
- [x] Чтобы пользоваться макетом и не мешать остальным, сохраните локальную версию. 
>[Вопросы и ответы по Figma](http://figmaweb.ru/faq-figma-otvety-na-samye-populyarnye-voprosy/)


## Техническое задание


### Общее  

Задание будет оцениваться путем изменения размеров окна браузера Google Chrome, или подключением эмуляции устройств. Сделать это можно в панели разработчика, и выбрав значение ширины экрана. Выводить проект на реальные мобильные устройства или планшеты **не обязательно**.  
❗ Если, например, при проверке выставлена ширина браузера в 768px, присутствует скролл справа, а картинка не соотвествует разметке макета Tablet-768, то надо сделать эмуляцию в режиме responsive, и выставить ширину в 768. Картиинка снизу.  
![responsive](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-2/singolo/responsive.png)
  
**Responsive** - это размеры, заданные в относительных величинах от ширины окна или родительского блока, которые плавно меняют свои значения при уменьшении или увеличении окна браузера. Если допускается несколько возможных вариантов ширины и высоты, об этом будет сказано дополнительно.

Значение названия кнопки, не игрет роли. Может быть "SEND", может быть "SUBMIT".


## 1020px <= width

Макет уже должен существовать на этот момент. Принимается один из двух вариантов. 
- [x] Либо блоки продолжают свой цвет на всю доступную область окна, а сама обертка центрируется. Либо макет занимает максимальную ширину в 1020px и центрируется с равными оступами справа и слева, белого или любого другого цвета из макета, например #F06C64 или #2d303a (при проверке, если трудно будет смотреть целостность на большом экране, в панели разработчика можно задать элементу body свойство background-color любого контрастного цвета).  

## 768px <= width < 1020px

### Header  

- [x] Логотоип слева и крайний элемент меню навигации справа сохраняют свои отступы до краев блока header.

### Slider

- [x] На картинке *Slide-1* телефоны должны быть уменьшены. Либо резким скачком до значений ширины и высоты, как на макете Tablet-768. Либо  уменьшением по принципу responsive, в зависимости от ширины экрана.  
  
- [x] Картинка *Slide-2* просто меняет свои размеры.  
  
- [x] Позиционирование стрелок "влево", "вправо", а так же расположение телефонов на *Slide-1* может меняться как посчитаете нужным, главное, чтобы значения позиционирования совпали с отступами в макете Tablet-768 при такой же ширине окна браузера в 768px.  

### Our services

- [x] Сетка из трех-колоночной становится двух-колоночной. **3 х 2** становится **2 х 3**.  
  
- [x] Меняются расстояния как от элементов сетки до краев блока, так и раастояние между соседствующими элементами, главное, чтобы значения позиционирования совпали с отступами в макете Tablet-768 при такой же ширине окна браузера в 768px. 

### Portfolio

- [x] Сетка из четырех-колоночной становится трех-колоночной. **4 х 3** становится **3 х 4**.  
  
- [x] ❗ Отступы между элементами сохраняются. Отступы до краев блока сохраняются. Вплоть до 768px.  

### About Us

- [x] Картинки меняют свои размеры по принципу responsive. Расстояние между элментами трех-колоночного макета, также, изменяются по принципу responsive.  
  
- [x] Отступы от элементов сетки до границ блока сохраняются. Отступы между иконками социальных сетей сохраняются.

### Get a quote

- [x] Изменяются размеры внутренних блоков по принципу responsive, главное, чтобы они совпали с размерами в макете Tablet-768 при такой же ширине окна браузера в 768px.
  
- [x] Отступы от элементов до границ блока по горизонтали сохраняются. По вертикали - изменяются. 

### Footer

- [x] Копирайт слева и крайняя иконка соц сетей справа сохраняют свои отступы до краев блока footer.


## 375px <= width < 768px

### Header  

Логотоип остается в центре. Верхнее меню навигации скрывается в бургер-меню слева.  
  
❗ По нажатию на меню, должна отображаться панель слева, которая перекрывает экран приложения. Важно, что, какой бы ни была высота окна браузера, блок меню должен занимать всю высоту. Ширину брать из макета. Также, иконка сэндвича должна поворачиваться, как на макете.

### Slider

На картинке *Slide-1* телефоны должны быть уменьшены. Либо резким скачком до значений ширины и высоты на экране 375px. Либо пропорциональным уменьшением в зависимости от ширины экрана.  
  
Картинка *Slide-2* просто меняет свои размеры.  
  
Позиционирование стрелок "влево", "вправо", а так же расположение телефонов на *Slide-1* может меняться как посчитаете нужным, главное, чтобы значения позиционирования совпали с отступами в макете Mobile-375 при такой же ширине окна браузера в 375px.  


### Our services

Сетка из двух-колоночной становится в одну колонку. **2 х 3** становится **1 х 6**.  
  
Меняются расстояния как от элементов сетки до краев блока, так и раастояние между соседствующими элементами, главное, чтобы значения позиционирования совпали с отступами в макете Mobile-375 при такой же ширине окна браузера в 375px.  

### Portfolio

Сетка из трех-колоночной становится двух-колоночной, высотой в 4 строки. Остальные элементы должны быть скрыты. **3 х 4** становится **2 х 4**.  
  
Отступы между элементами и до краев блока должны измениться. Отступы меняются либо резким скачком до значений ширины и высоты на экране 375px. Либо пропорциональным уменьшением в зависимости от ширины экрана.  

### About Us

Сетка из трех-колоночной становится в одну колонку. **3 х 1** становится **1 х 3**.  
  
Картинки, как и элементы сетки, меняют свои размеры пропорционально.
  
Отступы от элементов сетки до границ блока могут меняться. Отступы между иконками социальных сетей сохраняются.

### Get a quote

Изменяются размеры внутренних блоков, а также их расположение. Отступы и размеры также могут изменяться, главное, чтобы они совпали с размерами на макете макете Mobile-375 при такой же ширине окна браузера в 375px.    
  
Кнопка "SEND" растягивается на ширину блока.  

### Footer

Копирайт пропадает со страницы. Иконки соц сетей центрируются в блоке footer.


## width < 375px

Минимальная ширина макета = 320px. После порогового значения расположение верстки значения не имеет. Структура верстки остается такой же, как при ширине 375px. При уменьшении страницы с 375px до 320px, структура верстки (отступы, размеры блоков и др.) остаются по расположению как на макете Mobile-375.  
  
страница не должна разваливаться, что значит что отступы, размеры блоков, и прочее, не должны уходить за правый край экрана и не должен появляться горизонтальный скролл.
