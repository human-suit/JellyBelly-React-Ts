import { useEffect, useState } from "react";
import style from "./style.module.css";
import getApi from "../../hooks/getApi";
import { factsType } from "../../types/types";

const Recipes = () => {
  const [history, setHistory] = useState<factsType | undefined>();
  const [load, setLoad] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);
  useEffect(() => {
    (async () => {
      const men: any = await getApi(
        "https://jellybellywikiapi.onrender.com/api/Facts?pageIndex=1&pageSize=18"
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
            <h1>Facts..</h1>
            <div className={style.flex}>
              {load != true ? (
                history?.items.map((item, index) => (
                  <div key={index} className={style.border_box}>
                    <div className={style.padding}>
                      <h2>{item.title}</h2>
                      <div className={style.palka}></div>
                      <h3>{item.description}</h3>
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
