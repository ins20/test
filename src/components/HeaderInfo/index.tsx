import Icon from "@/assets/Icon";
import style from "./index.module.css";
import Button from "@ui/Button";

const HeaderInfo = () => {
  return (
    <div className={style.headerInfo}>
      <div className={style.logo}>
        <Icon id="logo" viewBox="0 0 165 48" width="165" height="48" />
      </div>
      <div className={style.info}>
        <h5 className={style.phrase}>«В нужное время - нужные деньги!»</h5>
        <div>
          <span className={style.days}>Пн-Вс:</span>{" "}
          <span className={style.time}>
            8.00 — 20.00 (11 филиалов) 9.00 — 21.00 (2 филиала)
          </span>
          <p className={style.time}>Без обеда и выходных</p>
        </div>
      </div>
      <div className={style.user}>
        <Icon id="profile" viewBox="0 0 24 24" width="24" height="24" />
        <a href="#" className={style.personalAccountLink}>
          Личный кабинет
        </a>
        <Button color={"grey"}>Выход</Button>
      </div>
      <div className={style.contact}>
        <Icon id="phone" viewBox="0 0 24 24" width="24" height="24" />
        <span className={style.phone}>8 (3412) 43-61-62</span>
        <Button variant={"contained"} style={{ marginLeft: "24px" }}>
          Заказать звонок
        </Button>
      </div>
    </div>
  );
};

export default HeaderInfo;
