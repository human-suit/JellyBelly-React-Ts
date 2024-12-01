import { useEffect, useState } from "react";
import style from "./style.module.css";
import getApi from "../../hooks/getApi";
import { recipesType } from "../../types/types";

const Recipes = () => {
  const [history, setHistory] = useState<recipesType | undefined>();
  const [load, setLoad] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);
  useEffect(() => {
    (async () => {
      const men: any = await getApi(
        "https://jellybellywikiapi.onrender.com/api/Recipes?pageIndex=1&pageSize=10"
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
            <h1>Recipes..</h1>
            <div className={style.flex}>
              {load != true ? (
                history?.items.map((item, index) => (
                  <div key={index} className={style.border_box}>
                    <img src={item.imageUrl} alt="#" />
                    <div className={style.padding}>
                      <h2>{item.name}</h2>
                      <h3>{item.description}</h3>
                      <p>Male: {item.makingAmount}</p>
                      <p>Cook Time: {item.cookTime}</p>
                      <p>Total Time: {item.totalTime}</p>
                    </div>
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

export default Recipes;
