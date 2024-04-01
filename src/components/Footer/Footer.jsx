import StyledFooter from './Footer.styled';

import linkedIn from './linkedin.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="flex">
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Terms of services</a></li>
          <li><a href="#">Shipping and returns</a></li>
        </ul>
        <input type="text" placeholder="Give an email, get the newsletter." />
      </div>
      <div className="flex">
        <div>&copy; <span><time>2021</time> Shelly.</span> Terms of use <span>and</span> privacy policy.</div>
        <ul>
          <li>
            <a href="#">
              <img src={linkedIn} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;