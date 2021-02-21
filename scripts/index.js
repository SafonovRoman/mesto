let popup = document.querySelector(".popup")
let profileName = document.querySelector('.profile__name')
let popupProfileName = popup.querySelector('.popup__profile-name')
let profileOccupation = document.querySelector('.profile__occupation')
let popupProfileOccupation = popup.querySelector('.popup__profile-occupation')

let clearPopup = function () {
	popupProfileName.value = ""
	popupProfileOccupation.value = ""
}

let openPopupFunc = function () {
	popupProfileName.placeholder = profileName.textContent
	popupProfileOccupation.placeholder = profileOccupation.textContent
	popup.style.display = "grid"
}


let closePopupFunc = function () {
	clearPopup()
	popup.style.display = "none"
}


let savePopupFunc = function () {
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
let popupSaveBtn = popup.querySelector('.popup__save-btn')
popupSaveBtn.addEventListener("click", savePopupFunc)
