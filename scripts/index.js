let popup = document.querySelector(".popup")
let profileName = document.querySelector('.profile__name')
let popupProfileName = popup.querySelector('#popup__profile-name')
let profileOccupation = document.querySelector('.profile__occupation')
let popupProfileOccupation = popup.querySelector('#popup__profile-occupation')


let openPopupFunc = function () {
	popupProfileName.value = profileName.textContent
	popupProfileOccupation.value = profileOccupation.textContent
	popup.classList.add('popup_opened')
}

let closePopupFunc = function () {
	popup.classList.remove('popup_opened')
}

let savePopupFunc = function (evt) {
	evt.preventDefault()
	if (popupProfileName.value !== "") {
		profileName.textContent = popupProfileName.value
	}
	if (popupProfileOccupation.value !== "") {
		profileOccupation.textContent = popupProfileOccupation.value
	}
	closePopupFunc()
}

let popupShowBtn = document.querySelector(".profile__btn-edit")
popupShowBtn.addEventListener("click", openPopupFunc)

let popupCloseBtn = popup.querySelector('.popup__close-btn')
popupCloseBtn.addEventListener("click", closePopupFunc)

let popupForm = popup.querySelector('.popup__form')
popupForm.addEventListener('submit', savePopupFunc)