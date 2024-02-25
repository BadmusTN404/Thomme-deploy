import { Container, SectionWrapper } from "../../GlobalStyle";
import { ClientWrapper } from "./ClientStyle";
import logo1 from "./../../media/client1.png"
import logo2 from "./../../media/client2.png"
import logo3 from "./../../media/client3.png"
import logo4 from "./../../media/client4.png"
import logo5 from "./../../media/client5.png"
import logo6 from "./../../media/client7.png"
import { Fade } from "react-awesome-reveal";

const Clients = () => {
  return (
    <SectionWrapper id="clients">
      <Fade direction="up" triggerOnce={true}>
        <Container>
            <h2 className="center">clients</h2>
            <p className="center">we have worked and still working with
             many prestigious organization and we are still open for partnership</p>
        
        <ClientWrapper>
            <div><img src={logo1} alt="" /></div>
            <div><img src={logo2} alt="" /></div>
            <div><img src={logo3} alt="" /></div>
            <div><img src={logo4} alt="" /></div>
            <div><img src={logo5} alt="" /></div>
            <div><img src={logo6} alt="" /></div>
        </ClientWrapper>
        </Container>
      </Fade>
    </SectionWrapper>
  )
}

export default Clients ;