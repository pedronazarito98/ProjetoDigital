// import { GlobalContainer } from "./Style/globalStyle";
import LandingPage from "./Pages/LandingPage";
import { Navbar } from "./Components/LandingPage/NavBar";

import './Style/global.css';

function App() {
  return (
    <>
      <Navbar/>
      <LandingPage />
    {/* <GlobalContainer/> */}
    </>
    
  );
}

export default App;