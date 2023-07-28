import styles from './informationModal.module.css'
export default function InformationModal({ setIsModalOpen, information }) {
  return (
    <div className={styles.bg} onClick={() => setIsModalOpen(false)}>
      <div className={styles.centered}>
        <div className={styles.container}>
          <button
            className={styles.closeBtn}
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            X
          </button>
          <div className={styles.information}>{information}</div>
          {/* <button
            className={styles.confirmationBtn}
            type="button"
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            OK
          </button> */}
        </div>
      </div>
    </div>
  )
}
