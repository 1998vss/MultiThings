import "./navbar index.css"

export default function Navbar(){
    return(
        <div id="navbarDiv">
            <div id="navbarOne">
                <div id="homeButtonDiv">
                    <a id="homeButton">
                        <span id="homeButtonText">MultiThings</span>
                    </a>
                </div>
                <div id="navSearchDiv">
                    <p><span class="material-icons" id="searchIcon">search</span></p>
                    <input type="search" placeholder="Search for Multithings"/>
                </div>
                <div id="upButtons"> 
                    <a><span class="material-icons" id="orders">view_in_ar</span></a>
                    <a><span class="material-icons" id="accountCircle">account_circle</span></a>
                </div>
            </div>
            <div id="navbarTwo">
                <div id="walletNinja-menu">3</div>
                <div id="swissArmyKnife-menu">4</div>
                <div id="furniture-menu">5</div> 
            </div> 
        </div>
    )
}