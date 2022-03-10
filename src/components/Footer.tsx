import React, { FC } from 'react'

interface FooterProps {
  // pageTitle: string
}

const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <footer>
      Developed by Mauro Ezequiel Frete &copy; {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
