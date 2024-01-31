import footerImg from "../images/footer-img.png"

const Section5 = () => {
    return (
        <div className="section-wrapper section-5-wrapper">
        <ul className="footer-list">
            <li>Contact</li>
            <li>KL</li>
            <li>1533, jln TRX</li>
            <li>Open Daily</li>
            <li>By Appointment Only</li>
        </ul>
        <img src={footerImg} className="footer-img"></img>
        <ul className="footer-list">
            <li>Connect</li>
            <li>03-89488685</li>
            <li>016-6307888</li>
            <li>contact@beancollectors.com</li>
            <li>Join Our Mailing List</li>
        </ul>
        <p className="copyright">
            Copyright &copy; CodeAndCreate. All Rights Reserved
        </p>
        </div>
    );
  };
  
  export default Section5;