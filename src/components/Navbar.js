import logoImg from "../images/logo.png";


const Navbar = ({ manualclick, counter2, clickMenu }) => {

 
  console.log("see counter2--->", counter2);


  return (
    <div className="navbar">
      <a href="#" className="logo-link">
        <img src={logoImg} alt="Logo" className="logo" />
      </a>

      <a href="#" className="menu" onClick={() => clickMenu()}>
        <div className="menu-line menu-line-1"></div>
        <div className="menu-line menu-line-2"></div>
        <div className="menu-line menu-line-3"></div>
      </a>

      <nav className="nav-list">
        <a
          className={counter2 === 0? "nav-link-change" : "nav-link"}
          onClick={() => manualclick(1)}
        >
          Home{" "}
        </a>
        <a
          onClick={() => manualclick(2)}
          className={counter2 === 2 ? "nav-link-change" : "nav-link"}
        >
          Vineyards{" "}
        </a>
        <a
          onClick={() => manualclick(3)}
          className={counter2 === 3 ? "nav-link-change" : "nav-link"}
        >
          Grapes{" "}
        </a>
        <a
          onClick={() => manualclick(4)}
          className={counter2 === 4 ? "nav-link-change" : "nav-link"}
        >
          Wine{" "}
        </a>
        <a
          onClick={() => manualclick(5)}
          className={counter2 === 5 ? "nav-link-change" : "nav-link"}
        >
          Contact{" "}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
