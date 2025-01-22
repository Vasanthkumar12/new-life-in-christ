import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer>
            <h1 className="footer_head">NEW LIFE IN JESUS CHRIST CHURCH</h1>
            <address>
                <p>Andarahalli(village),</p>
                <p>O G Halli(post),</p> 
                <p>Pennagaram(taluk),</p> 
                <p>Paupparappatti,</p>
                <p>Dharmapuri(district),</p>
                <p>Tamil Nadu, pin: 636809</p>    
            </address>
            <section id='contact'>
                <h1 className="footer_head">Contact:</h1>
                <p>Phone: 9486305217</p>
                <label htmlFor="email">Email: </label>
                <a href="mailto: nlijc@andarahalli@gmail.com">nlijcandarahalli@gmail.com</a>
            </section>
            <div>
                <h1 className="footer_head">Church opens:</h1>
                <p>All days from 9AM to 8PM</p>
            </div>

            <div id='social_medias'>
                <FontAwesomeIcon className='media_icons' icon={faFacebook} />
                <FontAwesomeIcon className='media_icons' icon={faTwitter} />
                <FontAwesomeIcon className='media_icons' icon={faInstagram} />
                <FontAwesomeIcon className='media_icons' icon={faYoutube} />
            </div>
        </footer>
    )
}