import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/haunguyen04/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/DinhHauNguyen" target="_blank"><BsGithub /></a>
            <a href="https://www.facebook.com/dinhhau.nguyen.7" target="_blank"><FaFacebookF /></a>
        </div>
    )
}

export default HeaderSocials