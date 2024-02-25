import FeatherIcon from "feather-icons-react";
import { Container, SectionWrapper } from "../../GlobalStyle";
import { Arrow, 
ArrowIcon,
Heading,
IntCol1,
IntCol2,
IntRow,
Line,
Slide,
} from "./IntStyle";
import slide1 from "./../../media/Rectangle7.png"
import Rectangle8 from "./../../media/Rectangle8.png"
import OwlCarousel from "react-owl-carousel";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";

const Int = () => {
    const owl = useRef()
  return (

    <SectionWrapper id="interiors">
        <Fade direction="up" triggerOnce={true}>
        <Container>
            <Heading>
                <div>
                    <h2>intuitive interiors</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        quae ratione. ipsum dolor sit amet consectetur 
                    </p>
                </div>

                <Arrow>
                    <ArrowIcon onClick={()=>owl.current.prev()}>
                        <FeatherIcon icon="arrow-left" />
                    </ArrowIcon>

                    <ArrowIcon onClick={()=>owl.current.next()}>
                        <FeatherIcon icon="arrow-right" />
                    </ArrowIcon>
                </Arrow>
            </Heading>

            <IntRow>
                <IntCol1>
                    <div>
                    <h2 style={{fontWeight:200}}>aesthetic office</h2>
                    <p>Enjoy our most beautiful relaxing funiture</p>
                    </div>
                    <Line />
                    <div>
                        <h3 style={{fontWeight:300}}>sitting area</h3>
                        <p>16 x 20 Feet</p>
                    </div>
                </IntCol1>

                <IntCol2>
                    <OwlCarousel
                    className="owl-theme"
                    loop
                    items={1.2}
                    nav={false}
                    dots={false}
                    margin={20}
                    ref={owl}
                    >
                    <Slide bg={slide1} /> 
                    <Slide bg={Rectangle8} />
                    </OwlCarousel>                  
                </IntCol2>
            </IntRow>
        </Container>
        </Fade>
    </SectionWrapper>
    
  )
}

export default Int ;