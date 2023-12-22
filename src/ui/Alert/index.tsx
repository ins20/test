import style from "./index.module.css";

import Container from "../Container";
import { AlertType } from "@/types/Alert";
import Icon from "@/assets/Icon";

const Alert = ({ text, isContainer, ...props }: AlertType) => {
  return (
    <div className={style.alert} {...props}>
      {isContainer ? (
        <Container>
          <div className={style.alertContent}>
            <Icon id="info" width={24} height={24} viewBox="0 0 24 24" />
            <span className={style.text}>{text}</span>
          </div>
        </Container>
      ) : (
        <div className={style.alertContent}>
          <Icon id="info" width={24} height={24} viewBox="0 0 24 24" />
          <span className={style.text}>{text}</span>
        </div>
      )}
    </div>
  );
};

export default Alert;
