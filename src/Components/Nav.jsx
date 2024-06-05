import Style from "./homepage.module.css"
import image from "./img/flourist.png"

const Nav = () => {
    return (
        <div>
            <img src={image} id={Style.b1} />
            <img src={image} id={Style.b2} />
            <nav id={Style.navbar}>
                <div id={Style.logo}>
                    <h1>Flower<span id={Style.shop}>Shop</span></h1>
                </div>
                <div id={Style.search}>
                    <input type="text" placeholder="Search flowers Here..."/>
                    <span id={Style.searchIcon} class="material-symbols-outlined">
                        search
                    </span>
                </div>
                <div id={Style.custDetail}>
                    <div>
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                        <p>Cart</p>
                    </div>
                    
                    <div>
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                        <p>Hi Guest</p>
                    </div>
                </div>
            </nav>
            <div id={Style.collections}>
                <button>Rose</button>
                <button>Lily</button>
                <button>Daisy</button>
                <button>Marigold</button>
                <button>Jasmine</button>
                <button>Iris</button>
                <button>Pansy</button>
                <button>Lavender</button>
                <button>Sunflower</button>
                <button>Lotus</button>
                <button>Tulip</button>
                <button>Daffodil</button>
            </div>
        </div>
    )
}

export default Nav