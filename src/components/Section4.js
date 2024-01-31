import section4bg from "../images/section-4-bg.jpg"

const Section4 = () => {
    return (
      <div className="section-wrapper section-4-wrapper">
        <div className="section-4-bg"></div>
        <h1 className="section-4-heading"> Newly Released Wines</h1>
        <img src={section4bg} alt="New Wine" className="new-wines-img"/>
      </div>
    );
  };
  
  export default Section4;