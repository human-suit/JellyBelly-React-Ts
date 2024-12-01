import { Link } from "react-router-dom";
import style from "./style.module.css";

const Home = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.main}>
          <img
            src="https://maggieshpileva.github.io/BeansProject/assets/main-DwmO4Woc.gif"
            alt="Jelly Belly"
          />
          <div className={style.top_pad}>
            <h1>Welcome to the World of Jelly Belly:</h1>
            <h2>A Rainbow of Flavors Awaits!</h2>
            <Link to={"/review"}>Оставте отзыв!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
