import Navbar from './Navbar'
function NavbarWraper(Page){
    const WrapedPage = (props)=>{
        return <div>
                <Navbar/>
                <Page/>
            </div>;
    }
    return WrapedPage;
}

export default NavbarWraper;