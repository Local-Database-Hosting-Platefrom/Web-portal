import OurService from "../ReactComponents/HomePage-Body/OurService";
import OurSupportedFrameWorks from "../ReactComponents/HomePage-Body/OurSupportedFrameWorks";
import HomePagefooter from "../ReactComponents/HomePage-Footer/HomePagefooter";
import HomePageHeader from "../ReactComponents/HomePage-Header/HomePageHeader";
import Navbar from "../ReactComponents/HomePage-Navbar/Navbar";
import NavbarWraper from "../ReactComponents/HomePage-Navbar/NavbarWraper";

const  Home=()=> {
  return <div style={{ height: "100%" }}>
    {/* Home screen */}
    {/* We will call the home page components here. */}
    {/* Navbar */}
    {/* <Navbar/> */}
    {/* Header */} 
  
    <HomePageHeader/>
    {/* Body */}
      {/* Our services */}
    <OurService/>
      {/* our supported frameworks */}
    <OurSupportedFrameWorks/>
    {/* Footer */}
    <HomePagefooter/>
  </div>;
}
export default NavbarWraper(Home);