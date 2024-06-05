import Style from "./homepage.module.css"
import img1 from "./img/bouquet.webp"
import img2 from "./img/banner1.jpg"
import img3 from "./img/banner2.jpg"
import img4 from "./img/banner3.jpg"

import { useEffect, useState } from "react"
import axios from "axios"


const MainPage = () => {
    // let [flowers, setFlowers] = useState([])

    // useEffect(() => {
    //     axios.get("https://gist.githubusercontent.com/sandeepcmsm/2e1f5762fa5ca351d8f129e73c730071/raw/30fb98f124445596a2a96f60a233ab13d07167d0/flowers.json")
    //     .then((res) => {
    //         setFlowers(res.data.flowerlist)
    //     })
    //     .catch(() => console.log("Didn't get the data"))
    // },[])
    // console.log(flowers)

    return (
        <div className={Style.mainPage}>
            <div className={Style.banner}>
                 <img src={img1} alt="" />
            </div>
            <div className={Style.features}>
                <p>Features</p>
                <div className={Style.ads}>
                    <img src={img4} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className={Style.delivery}>
                <p>Online Flower Delivery</p>
                <div className={Style.flowerDelivery}>
                    <div className={Style.flowers}>
                        <div>
                            <img src="https://imgcdn.floweraura.com/mother-day-flower-card-image_0.jpg" alt="" />
                        </div>
                        <p>Rose Bouquet</p>
                    </div>
                    <div className={Style.flowers}>
                        <div>
                            <img src="https://imgcdn.floweraura.com/vase_0_3.jpg" alt="" />
                        </div>
                        <p>Flower in Vase</p>
                    </div>
                    <div className={Style.flowers}>
                        <div>
                            <img src="https://imgcdn.floweraura.com/birthday_44.jpg" alt="" />
                        </div>
                        <p>Birthday</p>
                    </div>
                    <div className={Style.flowers}>
                        <div>
                            <img src="https://imgcdn.floweraura.com/anniversary_38.jpg" alt="" />
                        </div>
                        <p>Anniversary</p>
                    </div>
                    <div className={Style.flowers}>
                        <div>
                            <img src="https://imgcdn.floweraura.com/love_and_romance_6.jpg" alt="" />
                        </div>
                        <p>Love & Affection</p>
                    </div>
                    <div className={Style.flowers}>
                        <div>
                            <img src="https://imgcdn.floweraura.com/box_0.jpg" alt="" />
                        </div>
                        <p>Flower Gift Boxes</p>
                    </div>
                </div>
            </div>
            <div className={Style.flowerLove}>
                <h2>Say it with Flowers</h2>
                <p>Use the language of flowers to send your love</p>
                <div className={Style.greet}>
                    <div>
                        <img src={"https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/best_wishes_flowers_slides_igp_20221018.jpg"} alt="IMAGE" />
                        <p>BEST WISHES</p>
                    </div>
                    <div>
                        <img src={"https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/thank_you_flowers_slides_igp_20221018.jpg"} alt="IMAGE" />
                        <p>THANK YOU</p>
                    </div>
                    <div>
                        <img src={"https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/i_love_you_flowers_slides_igp_20221018.jpg"} alt="IMAGE" />
                        <p>LOVE YOU</p>
                    </div>
                    <div>
                        <img src={"https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/get_well_soon_flowers_slides_igp_20221018.jpg"} alt="IMAGE" />
                        <p>GET WELL SOON</p>
                    </div>
                    <div>
                        <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/sympathy_flowers_slides_igp_20221018.jpg" alt="IMAGE" />
                        <p>CONDOLENCES</p>
                    </div>
                </div>
            </div>
            <div className={Style.design}>
                <h2>Designer's Pick</h2>
                <p>Floral arrangements curated by experts</p>
                <div className={Style.cards}>
                    <div className={Style.card}>
                        <div>
                           <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-suited-splendor-bouquet-240781-m.jpg" alt="" />
                        </div>
                        
                        <p>Suited Splendor Bouquet</p>
                        <p className={Style.price}>₹ 1395</p>
                        <p className={Style.rating}>4.4 ⭐ (1.1k)</p>
                        <button>
                            <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                            Add to Cart
                        </button>
                    </div>
                    <div className={Style.card}>
                        <div>
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-caribbean-blues-271289-m.jpg" alt="" />
                        </div>
                        <p>Caribbean Blues</p>
                        <p className={Style.price}>₹ 381</p>
                        <p className={Style.rating}>3.1 ⭐ (4.1k)</p>
                        <button>
                        <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                            Add to Cart
                        </button>
                    </div>
                    <div className={Style.card}>
                        <div>
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-my-lovely-lover-hamper-201039-m.jpg" alt="" />
                        </div>
                        <p>My Lovely Lover</p>
                        <p className={Style.price}>₹ 431</p>
                        <p className={Style.rating}>3.2 ⭐ (440+)</p>
                        <button>
                        <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                            Add to Cart
                        </button>
                    </div>
                    <div className={Style.card}>
                        <div>
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-oriental-delight-bouquet-223313-m.jpg" alt="" />
                        </div>
                        <p>Oriental Delight Bouquet</p>
                        <p className={Style.price}>₹ 695</p>
                        <p className={Style.rating}>4.4 ⭐ (3.1k)</p>
                        <button>
                        <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                            Add to Cart
                        </button>
                    </div>
                    <div className={Style.card}>
                        <div>
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-quirky-pastel-extravaganza-223314-m.jpg" alt="" />
                        </div>
                        <p>Quirky Pastel</p>
                        <p className={Style.price}>₹ 684</p>
                        <p className={Style.rating}>3.8 ⭐ (2.3k)</p>
                        <button>
                        <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                            Add to Cart
                        </button>
                    </div>
                    <div className={Style.card}>
                        <div>
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-healthy-bliss-hamper-264299-m.jpg" alt="" />
                        </div>
                        <p>Healthy Blissful</p>
                        <p className={Style.price}>₹ 859</p>
                        <p className={Style.rating}>4.7 ⭐ (1.8k)</p>
                        <button>
                        <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                            Add to Cart
                        </button>
                    </div>
                    <div className={Style.card}>
                        <div>
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-love-in-blooms-anniversary-surprise-bouquet-264751-m.jpg" alt="" />
                        </div>
                        <p>Love in Blooms Aniversary</p>
                        <p className={Style.price}>₹ 1300</p>
                        <p className={Style.rating}>4.2 ⭐ (990+)</p>
                        <button>
                        <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                            Add to Cart
                        </button>
                    </div>
                    <div className={Style.card}>
                        <div>
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-midnight-cheers-206650-m.jpg" alt="" />
                        </div>
                        <p>Midnight Cheers</p>
                        <p className={Style.price}>₹ 1951</p>
                        <p className={Style.rating}>3.6 ⭐ (1.0k)</p>
                        <button>
                        <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                            Add to Cart
                        </button>
                    </div>
                    <div className={Style.card}>
                        <div>
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-blooming-roses-arrangement-223327-m.jpg" alt="" />
                        </div>
                        <p>Blooming Roses</p>
                        <p className={Style.price}>₹ 528</p>
                        <p className={Style.rating}>3.8 ⭐ (230+)</p>
                        <button>
                        <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                            Add to Cart
                        </button>
                    </div>
                    <div className={Style.card}>
                        <div>
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-splendid-moments-birthday-arrangement-265154-m.jpg" alt="" />
                        </div>
                        <p>Splendid Moments Bouquet</p>
                        <p className={Style.price}>₹ 995</p>
                        <p className={Style.rating}>4.8 ⭐ (2.2k)</p>
                        <button>
                        <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                            Add to Cart
                        </button>
                    </div>
                    <div className={Style.card}>
                        <div>
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-mom-s-moonlight-garden-270021-m.jpg" alt="" />
                        </div>
                        <p>Mom's Moonlight Bouquet</p>
                        <p className={Style.price}>₹ 1299</p>
                        <p className={Style.rating}>4.1 ⭐ (1.1k)</p>
                        <button>
                        <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                            Add to Cart
                        </button>
                    </div>
                    <div className={Style.card}>
                        <div>
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-radiant-gerbera-and-roses-bouquet-240786-m.jpg" alt="" />
                        </div>
                        <p>Radiant Gerbera Bouquet</p>
                        <p className={Style.price}>₹ 1125</p>
                        <p className={Style.rating}>4.5 ⭐ (100+)</p>
                        <button>
                        <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className={Style.specialFlowers}>
                <h2>Floweraura's Special Flowers</h2>
                <p>Explore Special Flowers</p>
                <div className={Style.specialCards}>
                    <div className={Style.specialCard}>
                        <div>
                            <img src="https://imgcdn.floweraura.com/luxury_flower.jpg" alt="" />
                        </div>
                        <p>Luxury Flowers</p>
                    </div>
                    <div className={Style.specialCard}>
                        <div>
                            <img src="https://imgcdn.floweraura.com/balloon_bouquet_1.jpg" alt="" />
                        </div>
                        <p>Flower Balloon Bouquets</p>
                    </div>
                    <div className={Style.specialCard}>
                        <div>
                            <img src="https://imgcdn.floweraura.com/usa_flower.jpg" alt="" />
                        </div>
                        <p>Flower to India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage