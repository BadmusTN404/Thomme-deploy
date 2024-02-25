import { Container, Row } from "../../GlobalStyle";
import Button from "../button/Button";
import { HeroWrapper } from "./HeroStyle";
import img from "./../../media/hero-img.png"
import Marquee from "react-fast-marquee";
import Star from "./../../media/Star.png";
import { Slide } from "react-awesome-reveal"


const Hero = () => {
  return (
    <HeroWrapper id="hero">
        <Container>
            <Row>
              <Slide direction ="left">
              {/* <img src={img} width="100%" alt="" /> */}
            <div>
                <h1>design your dream home</h1>
                <p>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Architecto asperiores magnam
                    commodi ex natus, alias  voluptas dicta.
                </p>
                <Button>Explore Gallery</Button>
            </div>
            </Slide>
            
            <div>
            <Slide direction="right">
              <img src={img}  width='100%'  alt="" />
              </Slide>
            </div>

            </Row>
        </Container>
        <Marquee className="marq">
          <span className="txt">modern design</span>
          <img src={Star} width='100' alt="st" />
          <span className="txt">modern design</span>
          <img src={Star} width='100' alt="st" />
        </Marquee>
    </HeroWrapper>
  )
}

export default Hero ;