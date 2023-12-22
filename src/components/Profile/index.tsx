import style from "./index.module.css";

import Input from "@ui/Input";
import Button from "@ui/Button";
import Alert from "@ui/Alert";
import Icon from "@/assets/Icon";

const Profile = () => {
  return (
    <form className={style.form}>
      <fieldset className={style.fieldset}>
        <legend className={style.legend}>Регистрация</legend>
        <div className={style.formFields}>
          <Input
            type={"text"}
            label={"Имя"}
            icon={
              <Icon id={"edit"} viewBox="0 0 24 24" width={24} height={24} />
            }
          />
          <Input
            type={"text"}
            label={"Фамилия"}
            icon={
              <Icon id={"edit"} viewBox="0 0 24 24" width={24} height={24} />
            }
          />
          <Input
            type={"email"}
            label={"E-mail"}
            icon={
              <Icon id={"edit"} viewBox="0 0 24 24" width={24} height={24} />
            }
          />{" "}
          <Input label={"Дата рождения"} defaultValue={"24.02.1988"} />
          <Input
            type={"tel"}
            maxLength={16}
            label={"Телефон"}
            defaultValue={"79120000000"}
            placeholder={"+7 ___ ___-__-__"}
          />
          <Button
            type={"button"}
            color={"green"}
            style={{
              marginTop: 32,
            }}
          >
            Изменить номер телефона
          </Button>
        </div>
      </fieldset>
      <div className={style.info}>
        <Alert
          isContainer={true}
          text={
            "В случае смены фамилии, паспортных данных, контактного номера телефон обратитесь в филиал «Сантус» для обновления данных в договоре"
          }
        />
      </div>
    </form>
  );
};
export default Profile;
