import React, { useEffect, useState } from "react";
import useServices from "../../services/useServices";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navData, setNavdata] = useState();
  const data = useServices("nav.json", "GET");

  useEffect(() => {
    data.then((res) => {
      setNavdata(res);
    });
  }, []);

  const navdataObj = {
    logo: navData?.data.img,
    links: navData?.data.links,
  };

  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="logo">
          <Link className="link" to="/">
            <img src={navdataObj.logo}></img>
          </Link>
        </div>
        <div className="nav_list">
          <ul>
            {navdataObj.links !== undefined &&
              navdataObj.links.map((element, key) => {
                return (
                  <li key={key}>
                    <Link
                      className="link"
                      to={element.toLowerCase().replace(/\s/g, "")}
                    >
                      {element}
                    </Link>
                  </li>
                );
              })}
          </ul>
          <div className="burger">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
