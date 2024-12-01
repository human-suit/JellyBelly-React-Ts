import { useEffect, useState } from "react";
import style from "./style.module.css";
import { historyType } from "../../types/types";
import getApi from "../../hooks/getApi";
const History = () => {
  const [history, setHistory] = useState<historyType | undefined>();
  const [load, setLoad] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);
  useEffect(() => {
    (async () => {
      const men: any = await getApi(
        "https://jellybellywikiapi.onrender.com/api/MileStones?pageIndex=1&pageSize=16"
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
            <h1>History..</h1>
            <div className={style.grid}>
              {load != true ? (
                history?.items.map((item, index) => (
                  <div key={index} className={style.border_box}>
                    <h2>{item.year} year</h2>
                    <h3>{item.description}</h3>
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

export default History;
