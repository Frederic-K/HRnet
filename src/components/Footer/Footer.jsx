export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__mail" href="mailto:contact@wealthhealth.com">
        Contact
      </a>
      <div className="footer__copyright">
        Copyright @ {new Date().getFullYear()} Whealth Health
      </div>
      <a className="footer__mail" href="mailto:assistance@wealthhealth.com">
        Assistance
      </a>
    </footer>
  )
}
