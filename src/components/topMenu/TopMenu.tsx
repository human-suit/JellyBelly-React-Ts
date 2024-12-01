import { FC } from "react";
import style from "./style.module.css";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
type Props = {
  isModal: Boolean;
  onClick: () => void;
};
const TopMenu: FC<Props> = ({ isModal, onClick }) => {
  if (!isModal) {
    return null;
  }
  const modalRoot = document.getElementById("menu") as HTMLElement;
  return createPortal(
    <div className={style.popupBox}>
      <div className={style.box}>
        <span className={style.closeIcon} onClick={onClick}></span>
        <div className={style.body}>
          <ul>
            <li>
              <Link to={`/beans`}>Beans</Link>
            </li>
            <li>
              <Link to={`/facts`}>Facts</Link>
            </li>
            <li>
              <Link to={`/recipes`}>Recipes</Link>
            </li>
            <li>
              <Link to={`/combinations`}>Combinations</Link>
            </li>
            <li>
              <Link to={`/history`}>History</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    //где распологать
    modalRoot
  );
};

export default TopMenu;
