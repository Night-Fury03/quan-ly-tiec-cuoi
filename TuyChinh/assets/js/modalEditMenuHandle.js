const editMenu= document.querySelector('.edit-menu-icon')
const modalEditMenu = document.querySelector('.edit-menu-modal')
const modalEditMenuContainer = document.querySelector('.edit-menu-modal-container')
const closeModalEditMenuBtn = document.querySelector('.js-modal-edit-menu-close')
const cancelEditMenuBtn = document.querySelector('.cancel-edit-menu-btn')

function Open() {
	modalEditMenu.classList.add('open')
}

function Hide() {
	modalEditMenu.classList.remove('open')
}

editMenu.addEventListener('click', Open)

closeModalEditMenuBtn.addEventListener('click', Hide)
cancelEditMenuBtn.addEventListener('click', Hide)
modalEditMenu.addEventListener('click', Hide)
modalEditMenuContainer.addEventListener('click', function(event) { event.stopPropagation() })