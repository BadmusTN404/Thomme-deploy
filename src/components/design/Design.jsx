import { Container, Row, SectionWrapper } from "../../GlobalStyle";
import { Arrow, ArrowIcon, SlidderCol, SlidderWrapper, Slides, Title } from "./DesignStyle";
import slide1 from "./../../media/slide1.png"
import FeatherIcon from "feather-icons-react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slide2 from "./../../media/slide2.png";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";

const Design  = () => {
    const owlRes =useRef();
    const owlCor =useRef();
  return (
    <div>
    <SectionWrapper id="designs">

        <Container>

                <h2 className="center">explore designs</h2>
                <p className="center">Lorem ipsum dolor sit 
                amet consectetur adipisicing elit, 
                ipsum dolor sit amet consectetur
                adipisicing elit.
                </p>
          <Fade direction="up" triggerOnce={true}>
            <Row style={{marginTop:40}}>
                    <SlidderCol>
                        <SlidderWrapper>
                            <OwlCarousel 
                            className='owl-theme' 
                            loop 
                            items={1} 
                            nav={false} 
                            dots={false}
                            ref={owlRes}
                            >

                            <Slides bg={slide1}/> 
                            <Slides bg={slide2}/>
                            </OwlCarousel>
                            <Arrow>
                            <ArrowIcon 
                            onClick={()=>owlRes.current.prev()}>
                            <FeatherIcon icon="chevron-left"/>
                            </ArrowIcon>
                            <ArrowIcon 
                            onClick={()=>owlRes.current.prev()}>
                            <FeatherIcon icon="chevron-right"/>
                            </ArrowIcon>
                            </Arrow>
                        </SlidderWrapper>
                        <Title>
                        <h3>Residential Design</h3>
                        <hr />
                        </Title>
                    </SlidderCol>
                    
                    
                    <SlidderCol>
                        <SlidderWrapper>
                            <OwlCarousel 
                            className='owl-theme' 
                            loop items={1} 
                            nav={false} 
                            dots={false}
                            ref={owlCor}
                            >

                            <Slides bg={slide1}/> 
                            <Slides bg={slide2}/>
                            </OwlCarousel>
                            <Arrow>
                            <ArrowIcon 
                            onClick={()=>owlCor.current.prev()}>
                            <FeatherIcon icon="chevron-left"/>
                            </ArrowIcon>
                            <ArrowIcon 
                            onClick={()=>owlCor.current.prev()}>
                            <FeatherIcon icon="chevron-right"/>
                            </ArrowIcon>
                            </Arrow>
                        </SlidderWrapper>
                        <Title>
                        <h3>corporate designs</h3>
                        <hr />
                        </Title>
                    </SlidderCol>
                </Row>
           </Fade>
                </Container>  
        </SectionWrapper>
      
    </div>
  )
}

export default Design ;
