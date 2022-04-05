import "./navbar index.css"

export default function Navbar(){
    return(
        <div id="navbarDiv">
            <div id="navbarOne">
                <div id="homeButtonDiv"><a id="homeButton"><span id="homeButtonText">MultiThings</span></a></div>
                <div id="navSearchDiv" ><input type="search" placeholder="Search for Multithings"/></div>
            </div>
            <div id="navbarTwo">
                <div id="walletNinja-menu">3</div>
                <div id="swissArmyKnife-menu">4</div>
                <div id="furniture-menu">5</div> 
            </div> 
        </div>
    )
}