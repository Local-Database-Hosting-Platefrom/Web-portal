import HomePagefooter from "./HomePagefooter"

const FooterWraper=(Page)=>{
    const UpdatedPage=(props)=>{
        return<div>
            <Page/>
            <HomePagefooter/>
        </div>
    }
    return UpdatedPage;
}

export default FooterWraper;