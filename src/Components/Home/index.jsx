import Footer from "../Footer"
import Header from "../Header"
import Body from "./Body"
import Features from "./Features"

function Home(){
    return(
        <div className="">
            <Header/>
            <div className="p-10 lg:p-0">
                <Body/>
                <Features/>
            </div>
            <Footer/>
        </div>
    )
}
export default Home