import styles from '../InfoModal/infoModal.module.css'
export default function InfoModal({ setIsModalOpen, title, information }) {
  let stylesBg = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    zIndex: '5',
    top: '50%',
    left: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    transform: 'translate(-50%, -50%)',
  }

  return (
    <div style={stylesBg} onClick={() => setIsModalOpen(false)}>
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
