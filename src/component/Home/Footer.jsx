import '../../assets/css/Footer.css'

function Footer({logo, alt}) {
    return (
        <footer>
            <img src={logo} alt={alt} />
            <p>© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;