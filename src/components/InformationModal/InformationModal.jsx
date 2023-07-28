import styles from './informationModal.module.css'
export default function InformationModal({ setIsModalOpen }) {
  return (
    <div
      className={styles.informationModal__bg}
      onClick={() => setIsModalOpen(false)}
    >
      <div className={styles.informationModal__centered}>
        <div className={styles.informationModal__container}>
          <button
            className={styles.informationModal__closeBtn}
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            X
          </button>
          <div className={styles.informationModal__info}>
            Employee created !
          </div>
          <button
            className={styles.informationModal__confirmationBtn}
            type="button"
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}
