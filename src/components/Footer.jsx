import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';

const Footer = () => {
    return(
        <footer>
            <section className='footer-btn'>
                <div className='footer-link'>
                    <a href="https://github.com/prayushapandey04" className='footer-button' target='blank'><SiGithub /></a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/prayusha-pandey-551609219/' className='footer-button' target='blank'><FaLinkedin /></a>
                </div>
                <div>
                    <a href='mailto:prayushaapandey@gmail.com' className='footer-button' target='blank'><MdOutlineMailOutline /></a>
                </div>
            </section>
        </footer>
    )
}

export default Footer;