const editButton = document.querySelector('.menu__button');
const exitButton = document.querySelector('.form__close');
const popupForm = document.querySelector('.form');
const checkbox = document.querySelector('.form__checkbox');
const editButtonSubmit = document.querySelector('.form__submit');
const formInput = document.querySelector('.form__input');
const popupCall = document.querySelector('.popup');

editButton.addEventListener('click', popupFormDisplayOn);
exitButton.addEventListener('click', popupFormDisplayOff);
editButtonSubmit.addEventListener('click', saveCall);
// popupCall.addEventListener('click', overlayPopupClose);

function popupFormDisplayOn() {
    popupToggle()
    resetForm(popupForm)
}

function popupFormDisplayOff() {
    popupToggle()
}

function saveCall(event) {
    event.preventDefault()
    popupFormDisplayOff()
    popupOpen(popupCall)
}

const popupToggle = function () {
    popupForm.classList.toggle('form_opened')
}
// var popup = document.querySelector('.popup');
document.addEventListener('mousedown', function(e){
    if(e.target.closest('.popup') === null){
        popupClose(popupCall)
    }
});

//открытие и закрытие попапа.
function popupOpen (popupCall) { 
    popupCall.classList.add('form_opened'); 
    // document.addEventListener('keyup', exitEscKey); 
} 
 
function popupClose (popupCall) { 
    popupCall.classList.remove('form_opened'); 
    // document.removeEventListener('keyup', exitEscKey); 
} 


// const popupCallToggle = function () {
//     popupCall.classList.toggle('form_opened')
// }

// editButton.addEventListener(`click`, () => {
// 	popup.classList.remove(`active`);
// 	form.classList.remove(`hide`);
// 	popupContainer.classList.add(`active`);
// });

// popupContainer.addEventListener(`click`, (e) => {
// 	if (e.target.classList.contains(`popup__close`) || e.target.classList.contains(`popup-container`)) {
// 		popupContainer.classList.remove(`active`);
// 	};
// });





