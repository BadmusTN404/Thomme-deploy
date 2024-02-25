import { Container, SectionWrapper } from '../../GlobalStyle'
import { CaseImg, Desc } from './CaseStyle';
import bg from "./../../media/Rectangle8.png"
import { Fade } from 'react-awesome-reveal';

const CaseStudy = () => {
  return (
    <SectionWrapper id='case'>
      <Fade direction="up" triggerOnce={true}>
        <Container>
            <h2 className='center'>case study</h2>
            <p className='center'>Get a depth understanding into the process we 
            go through for some of our previous project
            </p>
            <CaseImg bg={bg} />
            <Desc>
            <h2>Lounge Re-design</h2>
            <a href="##">Learn more</a>
            </Desc>
        </Container>
        </Fade>
    </SectionWrapper>
  )
}

export default CaseStudy ;