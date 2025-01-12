import Footer from "../Footer"
import Header from "../Header"
import Body from "./Body"
import Features from "./Features"
import Performance from "./Performance"
function Home(){
    return(
        <div className="">
            <Header/>
            <div className="p-10 lg:p-0">
                <Body/>
                <Features/>
            </div>
            <Performance/>
            <Footer/>
        </div>
    )
}
export default Home