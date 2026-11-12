import React from "react";
import Phone from "./Phone.png";
import Tablet from "./Tablet.png";
import Laptop from "./Laptop.png";


export default function Show() {
  return (
    <section className="show">
      <h1 className="show__title">Mobile Phone ~ Tablet ~ Laptop</h1>
      <h2 className="show__subtitle">
        Use <span className="show__highlight">Inwa Choice</span> to determine the option which is best for you.
      </h2>

      <div className="show__gallery">
        <div className="show__card">
          <img src={Phone} alt="Phone" className="show__img" />
        </div>
        <div className="show__card">
          <img src={Tablet} alt="Tablet" className="show__img" />
        </div>
        <div className="show__card">
          <img src={Laptop} alt="Laptop" className="show__img" />
        </div>
      </div>
    </section>
  );
}