import bag from "../images/bag.png";
import wineBottle from "../images/wine-bottle.png";

const Section2 = () => {
  return <div className="section-wrapper section-2-wrapper">
    <div className="sale">
        <img src={bag} alt="Sale Bag" className="sale-bag"/>
        <button className="sale-btn">Order Now</button>
    </div>
    <img src={wineBottle} alt="Wine Bottle" className="wine-bottle"/>
  </div>;
};

export default Section2;
