let languageRu = document.querySelectorAll('.ru');
let languageEn = document.querySelectorAll('.en');
let listAccounts = document.getElementById('accounts');
let menuSubListArrow = document.querySelector('.menu_sub-list-arrow');
let liWithSubList = document.querySelectorAll('.menu_linkWithSubList')
let section4Lists = document.querySelectorAll('.section_4-elements-list-img');
const btnUp = document.getElementById('up');

languageRu.forEach((element)=>{
    element.addEventListener('click', ()=>{
        languageRu[0].classList.toggle('language-choosen');
        languageEn[0].classList.toggle('language-choosen');
        languageRu[1].classList.toggle('footer-language-choosen');
        languageEn[1].classList.toggle('footer-language-choosen');
    })
})

languageEn.forEach((element)=>{
    element.addEventListener('click', ()=>{
    languageRu[0].classList.toggle('language-choosen');
    languageEn[0].classList.toggle('language-choosen');
    languageRu[1].classList.toggle('footer-language-choosen');
    languageEn[1].classList.toggle('footer-language-choosen');
    })
})

liWithSubList.forEach((element) =>{
    element.addEventListener('mouseenter', ()=>{
        menuSubListArrow.style.background = "url(/vectors_img/nav/arrow-for-menu-hover.svg) no-repeat center";
    })
    element.addEventListener('mouseleave', ()=>{
        menuSubListArrow.style.background = "url(/vectors_img/nav/arrow-for-menu.svg) no-repeat center";
    })
})

let section4ListArrow = document.querySelectorAll('.section_4-elements-list-img');

function openListSection_4 (event){
    event.currentTarget.classList.toggle('section_4-elements-list-img-open');
    let hiddenText = event.currentTarget.parentNode.parentNode.querySelector('.section_4-elements-list-content');
    hiddenText.classList.toggle('section_4-elements-list-content-open'); 
}

section4Lists.forEach((element)=>{
    element.addEventListener('click', openListSection_4)
})

//scroll top
$('.footer-button-up').on('click', function(){
    // e.preventDefault();
    window.scrollTo({top:0, behavior: "smooth"})
})


let linksImgSection6 = document.querySelectorAll('.section_6-elements-content-img');

linksImgSection6.forEach((element) =>{
    element.addEventListener('mouseenter', changeImgLinkHoverSection6);
    element.addEventListener('mouseleave', changeImgLinkSection6);
})

function changeImgLinkHoverSection6 (event){
    event.currentTarget.setAttribute('src', '/vectors_img/section_6/arrow-hover.svg')
}

function changeImgLinkSection6 (event){
    event.currentTarget.setAttribute('src', '/vectors_img/section_6/arrow.svg')
}

//slider section_6
let position = 0;
let slideToScroll = 1;
const container = document.querySelector('.section_6-content');
const track = document.querySelector('.section_6-container');
const elementsOfSlider = document.querySelectorAll('.section_6-elements');
const buttonPrev = document.getElementById('prev');
const buttonNext = document.getElementById('next');
let itemsCount = elementsOfSlider.length;
let itemWidth = 350;
let movePosition = slideToScroll * itemWidth;

buttonNext.addEventListener('click', ()=>{
    const itemsLeft = itemsCount - (Math.abs(position) + itemWidth) / itemWidth;
    position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkButtons();
})

buttonPrev.addEventListener('click', ()=>{
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkButtons();
})

const setPosition = ()=>{
    track.style.transform = `translateX(${position}px)`;
}

const checkButtons = ()=>{
    buttonPrev.disabled = position === 0;
    buttonNext.disabled = position <= -(itemsCount)*itemWidth;
}

checkButtons();
