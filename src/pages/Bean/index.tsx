import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { beanType } from "../../types/types";
import style from "./style.module.css";
const BeanPage = () => {
  const params = useParams();
  console.log(params);

  const [beanData, serBeanData] = useState<beanType | null>(null);
  const stylesObj = {
    backgroundColor: beanData?.backgroundColor,
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(
          `https://jellybellywikiapi.onrender.com/api/beans/${params.id}`
        );
        const data = await req.json();
        console.log(data);
        serBeanData(data);
      } catch (error) {
        console.log("Error->", error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Welcome BEan</h1>
      {beanData && (
        <div style={stylesObj} className={style.back}>
          <img src={beanData.imageUrl} alt="#" />
          <div className={style.back_white}>
            <h2>{beanData.flavorName}</h2>
            <h3>{beanData.description}</h3>
            <h4>{beanData.ingredients}</h4>
            <Link to={"/beans"}>Назад</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeanPage;
