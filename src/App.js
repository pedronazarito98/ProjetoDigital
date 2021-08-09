import LandingPage from "./Pages/LandingPage/index";
import { Navbar } from "./Components/LandingPage/NavBar";

import './Style/global.css';
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
    <>
    <ChakraProvider resetCSS={false}>

      <Navbar/>
      <LandingPage />
    </ChakraProvider>
    </>
    
  );
}

export default App;