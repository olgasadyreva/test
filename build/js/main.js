//document.body.classList.remove('no-js');

//Tabs

const elements = document.querySelectorAll('.tab__element');


elements.forEach(element =>{
    console.log(element);
    let btn = element.querySelector('.tab__btn');
    let content = element.lastElementChild;
    
    let contents = document.querySelectorAll('.tab__element .tab__content');
    
    btn.addEventListener('click', () => {
        contents.forEach(cont =>{
           
            if(content !== cont){
                cont.classList.add('hideText');
            }
            else {
                cont.previousElementSibling.querySelector('.tab__btn').classList.toggle('open');
            }

            
        });
        content.classList.toggle('hideText');
    });
});


//Создание переменных
const headerTopElement = document.querySelector('.js-header__top');
//Элементы меню
const menuListElement = document.querySelector('.js-nav__list');
const btnBurgerElement = document.querySelector('.js-header__burger');


const sectionMainElement = document.getElementById('js-main');
const sectionItemElement = document.getElementById('js-item');
const sectionPartnersElement = document.getElementById('js-partners');
const sectionFeaturesElement = document.getElementById('js-features');


const navLinksElement= document.querySelectorAll('.nav__link');
const navLinksArray = Array.from(navLinksElement); //преобразуем в массив

function handleLinkClick(e) {
    e.preventDefault();

    e.target.classList.add('nav__link--active');

    let coordsSection;

    if(e.target.textContent ==='Main') {
        coordsSection = sectionMainElement.offsetTop;
        e.target.classList.add('nav__link--active');
    }

    else if(e.target.textContent ==='Features'){
        coordsSection = sectionFeaturesElement.offsetTop;
        e.target.classList.add('nav__link--active');
    }

    else if(e.target.textContent ==='Item'){
        coordsSection = sectionItemElement.offsetTop;
        e.target.classList.add('nav__link--active');
    }

    else if (e.target.textContent ==='Partners') {
        coordsSection = sectionPartnersElement.offsetTop;
        e.target.classList.add('nav__link--active');
    }

    else if (e.target.textContent ==='F.A.Q.') {
        e.target.classList.add('nav__link--active');
    }

    window.scrollTo({ top: coordsSection, behavior: 'smooth' });

    navLinksArray.forEach(function(v, i, arr) {
        if(arr[i] !== e.target) {
            arr[i].classList.remove('nav__link--active');
            }
    });
}



//slider

window.onload = function () {
    /* var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }); */

    new Swiper(document.querySelector('.swiper-container'), {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        slideToClickedSlide: true,
        pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
          navigation: {
            el: '.swiper-navigation',
            nextEl: 'controls-item__btn--next',
            prevEl: 'controls-item__btn--prev',
        },
       /*  breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 35
          },
      
              1201: {
            slidesPerView: 3
              }
      
          } */
      });
    /* new Swiper(document.querySelector('.swiper-container'), {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        slideToClickedSlide: true,
        pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              //nextEl: '.controls-item__btn--next',
              //prevEl: '.controls-item__btn--prev',
        },
        breakpoints: {
          /* 1024: {
            slidesPerView: 2,
            spaceBetween: 35
          },
      
              1201: {
            slidesPerView: 1
              } 
      
          }
      }); */
    
  //};
  
    
  };


//Навешиваем событие на кнопку разворачивая меню
btnBurgerElement.addEventListener('click', onBtnShowMenuElemClick);
//Навешиваем события для закрытия меню при нажатии на esc
document.addEventListener('keydown', onBodyClickForCloseMenu);
//Навешиваем событие на меню  в хэдере
menuListElement.addEventListener('click', handleLinkClick);

//Навешиваем событие при загрузке страницы и изменении ширины окна
//window.addEventListener('load', checkViewPortUser);
//window.addEventListener('resize', checkViewPortUser);

//Функция показа/скрытия меню
function onBtnShowMenuElemClick(e) {
    //Навешиваем события для закрытия меню при клике вне его
    document.body.addEventListener('click', onBodyClickForCloseMenu);

    const target = e.target;
    const valAttrExpanded = btnBurgerElement.getAttribute('aria-expanded');
    
    headerTopElement.classList.toggle('menu-open');
    btnBurgerElement.closest('.js-header__top').classList.toggle('nav-open');

    if (valAttrExpanded === 'true') {
        btnBurgerElement.setAttribute('aria-label', 'Показать меню');
        btnBurgerElement.setAttribute ('aria-expanded', 'false');
    }

    if (valAttrExpanded === 'false') {
        btnBurgerElement.setAttribute('aria-label', 'Скрыть меню');
        btnBurgerElement.setAttribute ('aria-expanded', 'true');
    }
}

// Функция для закрытия меню нажатии esc
function onBodyClickForCloseMenu(e) {
    if(e.type === 'keydown' && e.keyCode === 27) {
        btnBurgerElement.closest('.js-header__top').classList.remove('nav-open');
        btnBurgerElement.classList.remove('nav-open');
        btnBurgerElement.setAttribute('aria-label', 'Показать меню');
        btnBurgerElement.setAttribute ('aria-expanded', 'false');

        document.body.removeEventListener('click', onBodyClickForCloseMenu);
    }
}













