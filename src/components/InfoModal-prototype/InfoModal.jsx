import styles from '../InfoModal/infoModal.module.css'
export default function InfoModal({ setIsModalOpen, title, information }) {
  return (
    <div style={styles.bg} onClick={() => setIsModalOpen(false)}>
      <div className={styles.position}>
        <div className={styles.container}>
          <button
            className={styles.closeBtn}
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            X
          </button>
          <div className={styles.content}>
            <div className={styles.title}>{title}</div>
            <div className={styles.information}>{information}</div>
          </div>

          <button
            className={styles.confirmationBtn}
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
