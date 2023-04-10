const imgs = document.querySelectorAll('.img-select a');
const imgs1 = document.querySelectorAll('.img-select1 a');
const imgs2 = document.querySelectorAll('.img-select2 a');
const imgs3 = document.querySelectorAll('.img-select3 a');
const imgs4 = document.querySelectorAll('.img-select4 a');
const imgs5 = document.querySelectorAll('.img-select5 a');
const imgs6 = document.querySelectorAll('.img-select6 a');
const imgs7 = document.querySelectorAll('.img-select7 a');
const imgBtns = [...imgs];
const imgBtns1 = [...imgs1];
const imgBtns2 = [...imgs2];
const imgBtns3 = [...imgs3];
const imgBtns4 = [...imgs4];
const imgBtns5 = [...imgs5];
const imgBtns6 = [...imgs6];
const imgBtns7 = [...imgs7];
let imgId = 1;
let imgId1 = 1;
let imgId2 = 1;
let imgId3 = 1;
let imgId4 = 1;
let imgId5 = 1;
let imgId6 = 1;
let imgId7 = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});
imgBtns1.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId1 = imgItem.dataset.id;
        slideImage();
    });
});
imgBtns2.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId2 = imgItem.dataset.id;
        slideImage();
    });
});
imgBtns3.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId3 = imgItem.dataset.id;
        slideImage();
    });
});
imgBtns4.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId4 = imgItem.dataset.id;
        slideImage();
    });
});
imgBtns5.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId5 = imgItem.dataset.id;
        slideImage();
    });
});
imgBtns6.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId6 = imgItem.dataset.id;
        slideImage();
    });
});
imgBtns7.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId7 = imgItem.dataset.id;
        slideImage();
    });
});
function slideImage(i){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    const displayWidth1 = document.querySelector('.img-showcase1 img:first-child').clientWidth;
    const displayWidth2 = document.querySelector('.img-showcase2 img:first-child').clientWidth;
    const displayWidth3 = document.querySelector('.img-showcase3 img:first-child').clientWidth;
    const displayWidth4 = document.querySelector('.img-showcase4 img:first-child').clientWidth;
    const displayWidth5 = document.querySelector('.img-showcase5 img:first-child').clientWidth;
    const displayWidth6 = document.querySelector('.img-showcase6 img:first-child').clientWidth;
    const displayWidth7 = document.querySelector('.img-showcase7 img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    document.querySelector('.img-showcase1').style.transform = `translateX(${- (imgId1 - 1) * displayWidth1}px)`;
    document.querySelector('.img-showcase2').style.transform = `translateX(${- (imgId2 - 1) * displayWidth2}px)`;
    document.querySelector('.img-showcase3').style.transform = `translateX(${- (imgId3 - 1) * displayWidth3}px)`;
    document.querySelector('.img-showcase4').style.transform = `translateX(${- (imgId4 - 1) * displayWidth4}px)`;
    document.querySelector('.img-showcase5').style.transform = `translateX(${- (imgId5 - 1) * displayWidth5}px)`;
    document.querySelector('.img-showcase6').style.transform = `translateX(${- (imgId6 - 1) * displayWidth6}px)`;
    document.querySelector('.img-showcase7').style.transform = `translateX(${- (imgId7 - 1) * displayWidth7}px)`;
}
window.addEventListener('resize', slideImage);