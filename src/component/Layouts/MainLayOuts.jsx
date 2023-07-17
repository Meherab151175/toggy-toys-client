
import NavBar from "../Shared/NavBar/NavBar";
import Carosuel from "../Home/Carosuel/Carosuel";
import Gallery from "../Home/Gallery/Gallery";
import Tabss from "../Tabs/Tabss";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayOuts = () => {
  return (
    <div>
      <NavBar />
      <Carosuel />
      <Gallery />
      <div className="my-10"></div>
      <Tabss />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayOuts;
