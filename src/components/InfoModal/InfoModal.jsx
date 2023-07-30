// import styles from '../InfoModal/infoModal.module.css'
import { PropTypes } from 'prop-types'
export default function InfoModal({
  setIsModalOpen,
  title,
  information,
  modalBg,
  closeBtnBg,
  colourCloseBtn,
  colourTitle,
  colourInformation,
  colourConfirmBtnBg,
  colourConfirmBtn,
  borderConfirmBtn,
}) {
  const stylesBg = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    zIndex: '5',
    top: '50%',
    left: '50%',
    background: 'rgba(0, 0, 0, 0.2)',
    transform: 'translate(-50%, -50%)',
  }

  const stylesPosition = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const stylesContainer = {
    width: '25vw',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    // background:
    //   'radial-gradient(circle, rgba(255, 246, 235, 1) 0%, rgba(255, 228, 196, 1) 70%)',
    background: modalBg,
    boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.193)',
    zIndex: '10',
  }

  // const stylesCloseBtnHover = {
  //   background: '#00bc77',
  //   boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.13)',
  //   transform: 'scale(1.2)',
  // }

  const stylesCloseBtn = {
    position: 'absolute',
    top: '-7%',
    right: '-3%',
    fontSize: '1.2rem',
    fontWeight: '500',
    // color: 'white',
    color: colourCloseBtn,
    borderRadius: '50%',
    border: 'none',
    padding: '4px 9px',
    // background: '#257b5a',
    background: closeBtnBg,
    // transition: 'all 0.25s ease',
    cursor: 'pointer',
  }

  const stylesContent = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '10px',
  }

  const stylesTitle = {
    width: '100%',
    textAlign: 'center',
    padding: '15px 15px 0px 15px',
    // color: '#00bc77',
    color: colourTitle,
    fontSize: '1.5rem',
    fontWeight: '500',
  }

  const stylesInformation = {
    width: '100%',
    textAlign: 'center',
    padding: '0px 25px 15px 25px',
    // color: '#257b5a',
    color: colourInformation,
    fontSize: '1.5rem',
    fontWeight: '500',
  }

  const stylesConfirmationBtn = {
    width: '100%',
    fontSize: '1.2rem',
    fontWeight: '700',
    // color: '#257b5a',
    color: colourConfirmBtn,
    border: 'none',
    padding: '10px 30px',
    // borderTop: '2px solid #d3d3d3',
    borderTop: borderConfirmBtn,
    borderRadius: '0px 0px 10px 10px',
    // background: 'transparent',
    background: colourConfirmBtnBg,
    cursor: 'pointer',
    // transition: 'all 0.25s ease',
  }

  // const stylesConfirmationBtnHover = {
  //   /* box-shadow: -1px -10px 5px -2px rgba(0, 0, 0, 0.05); */
  //   transform: 'none',
  //   background: 'rgba(255, 214, 163, 0.5)',
  // }

  return (
    <div style={stylesBg} onClick={() => setIsModalOpen(false)}>
      <div style={stylesPosition}>
        <div style={stylesContainer}>
          <button
            style={stylesCloseBtn}
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            X
          </button>
          <div style={stylesContent}>
            <div style={stylesTitle}>{title}</div>
            <div style={stylesInformation}>{information}</div>
          </div>

          <button
            // className={styles.confirmationBtn}
            style={stylesConfirmationBtn}
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

InfoModal.propTypes = {
  setIsModalOpen: PropTypes.bool,
  title: PropTypes.string,
  information: PropTypes.string,
  modalBg: PropTypes.string,
  closeBtnBg: PropTypes.string,
  colourCloseBtn: PropTypes.string,
  colourTitle: PropTypes.string,
  colourInformation: PropTypes.string,
  colourConfirmBtn: PropTypes.string,
  borderConfirmBtn: PropTypes.string,
}

InfoModal.defaultProps = {
  title: 'Modal Title',
  information: 'Modal information',
  modalBg: 'white',
  closeBtnBg: 'black',
  colourConfirmBtnBg: 'transparent',
  colourCloseBtn: 'white',
  colourTitle: 'black',
  colourInformation: 'white',
  colourConfirmBtn: 'black',
  borderConfirmBtn: '2px solid black',
}
