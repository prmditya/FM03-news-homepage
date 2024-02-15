import { useState } from "react";
import desktopImage from "../assets/images/image-web-3-desktop.jpg";
import mobileImage from "../assets/images/image-web-3-mobile.jpg";

function Hero() {
  const [img, setImg] = useState<string>(desktopImage);
  const [imgWidth, setImgWidth] = useState<number>(730);

  window.onresize = () => {
    if (window.innerWidth < 768) {
      setImg(mobileImage);
      setImgWidth(340);
    } else {
      setImg(desktopImage);
      setImgWidth(730);
    }
  };

  return (
    <div className="hero">
      <img src={img} style={{ maxWidth: `${imgWidth}px` }} alt="Web 3 image" />
      <div className="hero-cta">
        <div>
          <h1>The Bright Future of web 3.0?</h1>
        </div>
        <div className="hero-about">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
