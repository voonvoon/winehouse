import arrawImg from "../images/arrow.png";

const Button = ({clickLeft , clickRight}) => {
  return (
    <>
      <button className="page-btn left-btn" onClick={clickLeft}>
        <img src={arrawImg} />
      </button>

      <button className="page-btn right-btn" onClick={clickRight}>
        <img src={arrawImg} />
      </button>

      <div className="progress-wrapper">
        <div className="progress">
          <h2>1/5</h2>
        </div>
        <div className="circle-wrapper">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5"></div>
        </div>
      </div>
    </>
  );
};

export default Button;
