import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useState } from "react";
import TopMenu from "../topMenu/TopMenu";
import useDeviseType from "../../hooks/useDeviceType";

const Header = () => {
  const [isModal, setModal] = useState(false);
  const handleClick = () => {
    setModal(true);
  };
  const windowSize = useDeviseType();

  const links = () => {
    return (
      <>
        <li>
          <Link to={`JellyBelly-React-Ts/beans`}>Beans</Link>
        </li>
        <li>
          <Link to={`JellyBelly-React-Ts/facts`}>Facts</Link>
        </li>
        <li>
          <Link to={`JellyBelly-React-Ts/recipes`}>Recipes</Link>
        </li>
        <li>
          <Link to={`JellyBelly-React-Ts/combinations`}>Combinations</Link>
        </li>
        <li>
          <Link to={`JellyBelly-React-Ts/history`}>History</Link>
        </li>
      </>
    );
  };

  return (
    <>
      <div className={style.container}>
        <Link to={`/JellyBelly-React-Ts`}>
          <div className={style.logo}>
            <img
              src="https://maggieshpileva.github.io/BeansProject/assets/logo-BjdOEEcy.png"
              alt="#"
            />
            <h1>Jelly Belly</h1>
          </div>
        </Link>
        <div>
          <ul>
            {windowSize < 801 ? (
              <a href="#" id="menu" onClick={handleClick}>
                Menu
              </a>
            ) : (
              links()
            )}
          </ul>
        </div>
      </div>
      <TopMenu isModal={isModal} onClick={() => setModal(false)} />
    </>
  );
};

export default Header;
