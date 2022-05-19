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
                    <a><span class="material-icons" id="shoppingCart">shopping_cart_checkout</span></a>
                </div>
            </div>
            <div id="navbarTwo">
                <div class="productTitle" id="walletNinja-menu">Wallet Ninjas</div>
                <div class="productTitle" id="swissArmyKnife-menu">Swiss Army Knifes</div>
                <div class="productTitle" id="furniture-menu">Furniture</div> 
            </div> 
        </div>
    )
}