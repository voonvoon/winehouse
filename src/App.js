import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { useState, useEffect } from "react";

function App() {
  let counter1 = 0;
  let counter2 = 1;
  let bool = true;
  const [counter2State, setCounter2State] = useState(1);

  // useEffect(() => {
  //   const section1wrapper = document.querySelector(".section-1-wrapper");

  //   section1wrapper.style.transform = "scale(1)";
  // });

  const sections = document.querySelectorAll("section");

  const progressCounter = () => {
    const sections2 = document.querySelectorAll("section");
    // console.log("sections===>", sections);
    const progress = document.querySelector(".progress h2");
    const circles = document.querySelectorAll(".circle");

    progress.textContent = `${counter2}/ ${sections2.length}`;

    Array.from(circles).forEach((circle) => {
      circle.style.backgroundColor = "transparent";
    });

    document.querySelector(`.circle-${counter2}`).style.backgroundColor =
      "#ddd";
  };

  const pageController = () => {
    bool = true;

    if (counter1 === 5) {
      // Array.from(sections).forEach((section) => {
      //   section.style.left = "0";
      // });
      counter1 = 0;
      counter2 = 1;
      progressCounter();
      bool = false;
      return; // allow us to terminate any other code in tis FN.
    }

    // if (counter1 === -1) {
    //   Array.from(sections).forEach((section) => {
    //     if (section.classList[0] === "section-5") {
    //       return;
    //     }
    //     section.style.left = "-100vw";
    //   });
    //   counter1 = 4;
    //   counter2 = 5;
    //   progressCounter();
    //   bool = false;
    // }
    progressCounter();
    return bool;
  };

  //handling btn
  const clickLeft = () => {
    if (counter2 === 1) {
      return;
    }
    counter1--;
    counter2--;
    pageController() &&
      (document.querySelector(`.section-${counter2}`).style.left = "0");
  };

  const clickRight = () => {
    if (counter2 === 5) {
      return;
    }
    counter1++;
    counter2++;

    pageController() &&
      (document.querySelector(`.section-${counter1}`).style.left = "-100vw");
  };

  const manualclick = (sec) => {
    // const sections2 = document.querySelectorAll("section");
    // counter2 = sec;
    // pageController() &&
    //   (document.querySelector(`.section-${counter2}`).style.left = "0");
  };

  // window.addEventListener("wheel", (e) => {
  //   console.log("see deltaY===>", e.deltaY);

  //   const deltaY = e.deltaY > 0;
  //   if (deltaY) {
  //     counter1++;
  //     counter2++;
  //   } else {
  //     counter1--;
  //     counter2--;
  //   }

  //   pageController();
  //   progressCounter();

  //   bool &&
  //     (document.querySelector(
  //       `.section-${deltaY ? counter1 : counter2}`
  //     ).style.left = `${deltaY ? "-100vw" : "0"}`);

  //   //== console.log(counter1, counter2);
  // });

  const clickMenu = () => {
    const menu = document.querySelector(".menu");
    document.querySelector(".navbar").classList.toggle("change");
  };

  return (
    <div className="container">
      <Navbar
        manualclick={manualclick}
        counter2={counter2State}
        clickMenu={clickMenu}
      />

      <Button clickLeft={clickLeft} clickRight={clickRight} />
      <div className="wrapper">
        <section className="section-1">
          <Section1 />
        </section>
        <section className="section-2">
          <Section2 />
        </section>

        <section className="section-3">
          <Section3 />
        </section>

        <section className="section-4">
          <Section4 />
        </section>

        <section className="section-5">
          <Section5 />
        </section>
      </div>
    </div>
  );
}

export default App;
