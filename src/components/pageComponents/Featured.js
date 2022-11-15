import React, { useEffect, useState } from "react";
import useServices from "../../services/useServices";
import Card from "../dynamicComponent/Card";

const Featured = () => {
  const [featuredData, setFeaturedData] = useState();
  const [cardData, setCardData] = useState();

  const data = useServices("featured.json", "GET");
  const card_data = useServices("card.json", "GET");

  useEffect(() => {
    data.then((res) => {
      setFeaturedData(res);
    });
    card_data.then((res) => {
      setCardData(res);
    });
  }, []);

  const featuredDataObj = {
    title: featuredData?.data.title,
  };

  return (
    <React.Fragment>
      <div className="featured">
        <div className="featured_title">{featuredDataObj.title}</div>
        <div className="featured_slider_container">
          <div className="featured_slider_arrow">
            <i className="fa-solid fa-left-long"></i>
          </div>
          <div className="featured_slider">
            {cardData?.data?.map((param, key) => {
              return (
                <Card key={key} title={param.title} content={param.content} />
              );
            })}
          </div>
          <div className="featured_slider_arrow">
            <i className="fa-solid fa-right-long"></i>
          </div>
        </div>

        <div className="points">
          {Array.from({ length: Number(cardData?.data?.length / 3) }).map(
            (param, key) => {
              return <div key={key} className="point"></div>;
            }
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Featured;
