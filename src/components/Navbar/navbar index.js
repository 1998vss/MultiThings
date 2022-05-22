import "./navbar index.css"
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <div id="navbarDiv">
            <div id="navbarOne">
                <div id="homeButtonDiv">
                    <a id="homeButton" href="http://localhost:3000/">
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
                <div class="productTitle" id="walletNinja-menu">
                    <span>
                        <Link to="/wallet">
                            Wallet Ninjas
                        </Link>
                    </span>
                </div>
                <div class="productTitle" id="swissArmyKnife-menu">               
                    <span>
                        <Link>
                            Swiss Army Knifes
                        </Link>
                    </span>                    
                </div>
                <div class="productTitle" id="furniture-menu">           
                    <span>
                        <Link>
                            Furniture
                        </Link>
                    </span>             
                </div> 
            </div> 
        </div>
    )
}