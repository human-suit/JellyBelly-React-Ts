import { Link } from "react-router-dom";
import style from "./style.module.css";
// import { FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormType = {
  user_name: string;
  user_email: string;
  category: string;
};

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className={style.container}>
        <h1>Welcome my Review</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="user_name">
            Name{" "}
            <input
              id="user_name"
              type="text"
              {...register("user_name", {
                required: {
                  value: true,
                  message: "Обязательное поле",
                },
                minLength: {
                  value: 3,
                  message: "В поле с именем надо больее 3 букв",
                },
              })}
            />
          </label>
          {errors.user_name && <p>{errors.user_name.message}</p>}
          <label>
            Email <input type="email" {...register("user_email")} />
          </label>
          <select {...register("category")}>
            <option value="Все супер!">Все супер!</option>
            <option value="Нормально">Нормально</option>
            <option value="Я просто чил">Я просто чил</option>
          </select>
          <input type="submit" />
        </form>
        <Link to={`/`}>Back</Link>
      </div>
    </div>
  );
};

export default Review;
