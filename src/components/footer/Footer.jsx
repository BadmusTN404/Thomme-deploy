import { Container } from "../../GlobalStyle";
import footer from "./../../media/foothead1.png"
import { FootRow, 
FootWrapper,
FooterSocial,
Social,
SocialIconWrapper,
SocialWrapper } from "./FooterStyle";
import logo from "./../../media/logoa.png"
import FeatherIcon from "feather-icons-react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div>
        <img src={footer} width="100%" alt="" />
        <FootWrapper>
        <Fade direction="up" triggerOnce={true}>
            <Container>
                <FootRow>
                    <div className="col1">
                        <img src={logo} width="120px" alt="" />
                        <p>Beautiful designs are welcoming</p>
                    </div>

                    <div className="col2">
                        <div>
                            <h4>Services</h4>
                            <ul>
                                <li>Space Redesign</li>
                                <li>Product Purchase</li>
                            </ul>
                        </div>

                        <div>
                            <h4>Show Case</h4>
                            <ul>
                                <li>Residential Design</li>
                                <li>Corporate Design</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Websites</h4>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Companies</h4>
                            <ul>
                                <li>Contact Us</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>
                </FootRow>

                <FooterSocial>
                    <SocialWrapper>
                      <SocialIconWrapper>
                        <Social>
                            <FeatherIcon icon="instagram"/>
                        </Social>

                        <Social>
                            <FeatherIcon icon="twitter"/>
                        </Social>

                        <Social>
                            <FeatherIcon icon="facebook"/>
                        </Social>

                        <Social>
                            <FeatherIcon icon="youtube"/>
                        </Social>                                                  
                        </SocialIconWrapper>
                        <p>Copyright All right Reserved</p>
                    </SocialWrapper>
                </FooterSocial>
            </Container>
         </Fade>
        </FootWrapper>
    </div>
  )
}

export default Footer ;