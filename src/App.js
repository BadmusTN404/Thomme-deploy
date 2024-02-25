import GlobalStyle from "./GlobalStyle";
import CaseStudy from "./components/case-study/CaseStudy";
import Clients from "./components/clients/Clients";
import Design from "./components/design/Design";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Int from "./components/int/Int";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar/>
      <Hero />
      <Design />
      <Int />   
      <CaseStudy />
      <Clients />  
      <Footer />
      

    </div>
  );
}

export default App;
