import { Container } from "../../GlobalStyle";
import { BtnGroup, Menu, Nav, NavWrapper } from "./NavStyle";
import logo from "./../../media/logo.png"
import Button from "../button/Button";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);
  return (
    <NavWrapper>
        <Container>
            <Nav> 
            <div>
                <a href="hero">
                <img src={logo} width="121" alt="" />
                </a>
            </div> 
                <Menu className={show && "show"}>
                <ul>
                    <li>
                        <a href="#designs">design</a>
                    </li>
                    <li>
                        <a href="#interiors">Interiors</a>
                    </li>
                    <li>
                        <a href="#case">Case Study</a>
                    </li>
                    <li>
                        <a href="#clients">Clients</a>
                    </li>
                </ul>
                </Menu> 
        <BtnGroup className={show && "showBtn"}>   
            <Button variant="text">Sign In</Button>
            <Button>Sign Up</Button>    
        </BtnGroup>
            <FeatherIcon 
            onClick={()=>setShow(!show)} 
            icon={show ? "x" : "menu" }
            className="menu-icon"/>
            </Nav>      
        </Container>
    </NavWrapper>
  )
}

export default Navbar ;