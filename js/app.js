'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnOpenModal = document.querySelector('.btn--show-modal')

//FUNCTION
const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

//EVENT
//open modal
btnOpenModal.addEventListener('click', openModal)

//close modal
btnCloseModal.addEventListener('click', closeModal)

//CLicking on the overlay will close the modal
overlay.addEventListener('click', closeModal)

//Pressing the Esc key will close the modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
