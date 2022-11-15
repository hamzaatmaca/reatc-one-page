import React, { useEffect, useState } from "react";
import Button from "../components/dynamicComponent/Button";
import useServices from "../services/useServices";
import { Link } from "react-router-dom";
import Featured from "../components/pageComponents/Featured";

const Home = () => {
  const [sliderData, setSliderData] = useState();
  const data = useServices("slider.json", "GET");

  useEffect(() => {
    data.then((res) => {
      setSliderData(res);
    });
  }, []);

  const sliderdataObj = {
    img: sliderData?.data.img,
    text: sliderData?.data.text,
    buttonText: sliderData?.data.buttonText,
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + sliderdataObj.img})`,
        }}
        className="slider"
      >
        <span className="slider_text">{sliderdataObj.text}</span>
        <Button
          backgroundColor="white"
          textColor="#E42626"
          text={sliderdataObj.buttonText}
        />
      </div>
      <Featured />
      <div
        style={{
          width: "100%",
          marginTop: "3rem",
        }}
        className="promo"
      >
        <img
          style={{
            width: "100%",
          }}
          src="Promo.jpg"
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
