const editShift= document.querySelector('.edit-shift-btn')
const modalEditShift = document.querySelector('.edit-shift-modal')
const modalEditShiftContainer = document.querySelector('.edit-shift-modal-container')
const closeModalEditShiftBtn = document.querySelector('.js-modal-edit-shift-close')
const cancelEditShiftBtn = document.querySelector('.cancel-edit-shift-btn')

const addShift= document.querySelector('.add-shift-btn')
const modalAddShift = document.querySelector('.add-shift-modal')
const modalAddShiftContainer = document.querySelector('.add-shift-modal-container')
const closeModalAddShiftBtn = document.querySelector('.js-modal-add-shift-close')
const cancelAddShiftBtn = document.querySelector('.cancel-add-shift-btn')

function Open() {
	modalEditShift.classList.add('open')
}

function Hide() {
	modalEditShift.classList.remove('open')
}

function OpenAdd() {
	modalAddShift.classList.add('open')
}

function HideAdd() {
	modalAddShift.classList.remove('open')
}

editShift.addEventListener('click', Open)

closeModalEditShiftBtn.addEventListener('click', Hide)
cancelEditShiftBtn.addEventListener('click', Hide)
modalEditShift.addEventListener('click', Hide)
modalEditShiftContainer.addEventListener('click', function(event) { event.stopPropagation() })


addShift.addEventListener('click', OpenAdd)

closeModalAddShiftBtn.addEventListener('click', HideAdd)
cancelAddShiftBtn.addEventListener('click', HideAdd)
modalAddShift.addEventListener('click', HideAdd)
modalAddShiftContainer.addEventListener('click', function(event) { event.stopPropagation() })