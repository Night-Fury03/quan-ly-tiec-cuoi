const editGuest= document.querySelector('.edit-guest-icon')
const modalEditGuest = document.querySelector('.edit-guest-modal')
const modalEditGuestContainer = document.querySelector('.edit-guest-modal-container')
const closeModalEditGuestBtn = document.querySelector('.js-modal-edit-guest-close')
const cancelEditGuestBtn = document.querySelector('.cancel-edit-guest-btn')

function Open() {
	modalEditGuest.classList.add('open')
}

function Hide() {
	modalEditGuest.classList.remove('open')
}

editGuest.addEventListener('click', Open)

closeModalEditGuestBtn.addEventListener('click', Hide)
cancelEditGuestBtn.addEventListener('click', Hide)
modalEditGuest.addEventListener('click', Hide)
modalEditGuestContainer.addEventListener('click', function(event) { event.stopPropagation() })