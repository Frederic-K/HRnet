import { useState } from 'react'
import xcrossClose from '../../assets/close.png'

export default function Modal(firstName, lastName) {
  const [isModalShown, setIsModalShow] = useState(false)
  const handleOpenModal = () => {
    setIsModalShow(true)
  }
  const handleCloseModal = () => {
    setIsModalShow(false)
  }

  return (
    <div className="modal">
      <div
        className="modal__closeBtn"
        onClick={() => {
          handleCloseModal()
        }}
      >
        <img src={xcrossClose} alt="Close button" />
      </div>
      <div className="modal__message">
        Employee {firstName} {lastName} created !
      </div>
      <div
        className="modal__confirmationBtn"
        type="button"
        onClick={() => {
          handleCloseModal()
        }}
      >
        OK
      </div>
    </div>
  )
}
