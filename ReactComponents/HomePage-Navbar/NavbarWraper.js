import { useState } from "react";
import Navbar from "./Navbar";

function NavbarWraper(Page) {
  const WrapedPage = (props) => {
    const [isProgressBarVisible,setIsProgressBarVisible] = useState(false);
    const handleProgressBarVisiblity=(value)=>{
      setIsProgressBarVisible(value);
    }
    return (
      <div>
        <Navbar isProgressBarVisible={isProgressBarVisible} />
        <Page handleProgressBarVisiblity={handleProgressBarVisiblity}/>
      </div>
    );
  };
  return WrapedPage;
}

export default NavbarWraper;
