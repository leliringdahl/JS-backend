import React from 'react'

const Footer: React.FC = () => { /* gjorde ingen component på dessa länkar iom att dem enbart används i footern */
  return (
    <section className="footer">
            <div className="sns-icons"> 
                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://google.com" target="_blank"><i className="fa-brands fa-google"></i></a>
                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <p>© 2022 Fixxo. All Rights Reserved</p>
        </section>
  )
}

export default Footer