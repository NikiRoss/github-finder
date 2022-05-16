import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-grey-700
    text-primary-content footer-centre'>
        <div>
            <p>&copy; #code ltd {footerYear}</p>
        </div>

    </footer>
  )
}

export default Footer