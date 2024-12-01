import { useEffect, useState } from "react";
import style from "./style.module.css";
import getApi from "../../hooks/getApi";
import { beansType } from "../../types/types";
import { Link } from "react-router-dom";

const Beans = () => {
  const [history, setHistory] = useState<beansType | undefined>();
  const [load, setLoad] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);
  useEffect(() => {
    (async () => {
      const men: any = await getApi(
        "https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=15"
      );
      if (men == "Error") {
        setError(true);
      } else {
        setLoad(false);
        setHistory(men);
        console.log(men);
      }
    })();
  }, []);

  return (
    <div>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.top_pad}>
            <h1>Explore All Beans..</h1>
            <div className={style.flex}>
              {load != true ? (
                history?.items.map((item, index) => (
                  <div id={`${index}`} key={index} className={style.border_box}>
                    <Link to={`/bean/${item.beanId}`}>
                      <div className={style.padding}>
                        <img src={item.imageUrl} alt="#" />
                        <h2>{item.flavorName}</h2>
                        <h3>{item.description}</h3>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div>
                  {error == true ? "Перезагрузите страницу!" : "Loading.."}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beans;
