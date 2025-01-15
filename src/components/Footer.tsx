import '../styles/Footer.scss'

// const consultantName = 'Gary Dickenson'
const email = 'info@gddevltd.co.uk'
const telephone = '+44 7809261617'

export default function Footer() {
  return (
    <footer id="site-footer" className="site-footer">
      <div className="container">
        <div id="contact-us-container" className="contact-us-container">
          <div className="contact-us-item">
            <img src="assets/images/call.svg" alt="call" />
            <a href={'tel: ' + telephone}>{telephone}</a>
          </div>
          <div className="contact-us-item">
            <img src="assets/images/mailto.svg" alt="mailto" />
            <a href={'mailto: ' + email}>{email}</a>
          </div>
          <div className="contact-us-item linkedin">
            <a href="https://www.linkedin.com/in/dickensong/" target="_blank">
              <img src="assets/images/linkedin.png" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
