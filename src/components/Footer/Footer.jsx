import StyledFooter, { Links, Icons, Form, Input, Submit } from './Footer.styled';

import linkedIn from './linkedin.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import arrow from './arrow.svg';

const Footer = () => {
  return (
    <StyledFooter className='heading-5'>
      <div className='container'>
        <div className='flex'>
          <Links>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Terms of services</a></li>
            <li><a href='#'>Shipping and returns</a></li>
          </Links>
          <Form>
            <Input type='text' placeholder='Give an email, get the newsletter.' />
            <Submit><img src={arrow} alt='' /></Submit>
          </Form>
        </div>
        <div className='flex'>
          <div>&copy; <span><time>2021</time> Shelly.</span> Terms of use <span>and</span> privacy policy.</div>
          <Icons>
            <li>
              <a href='#'>
                <img src={linkedIn} alt='LinkedIn' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={facebook} alt='Facebook' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={instagram} alt='Instagram' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={twitter} alt='Twitter' />
              </a>
            </li>
          </Icons>
        </div>
      </div>
    </StyledFooter>
  );
};

export { Footer };