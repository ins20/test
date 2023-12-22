import style from "./index.module.css";

import Input from "@ui/Input";
import Button from "@ui/Button";
import { formatNumber } from "@/utils/helpers";

const Payment = ({ amount }: { amount: number }) => {
  return (
    <>
      <p className={style.title}>Оплата</p>
      <p className={style.subtitle}>
        Для оплаты задолженности банковской картой вы будете переведены к нашему
        оператору.
      </p>
      <form>
        <fieldset className={style.fieldset}>
          <legend className={style.legend}>
            Уточните Ваш e-mail,
            <br /> мы отправим туда квитанцию об оплате:
          </legend>
          <Input
            defaultValue={"mymail@mail.ru"}
            type={"email"}
            style={{ marginBottom: 24, width: 344, fontSize: 14 }}
          />
          <div className={style.footer}>
            <span className={style.total}>{formatNumber(amount)} ₽</span>

            <Button variant={"contained"} type="submit">
              Оплатить
            </Button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Payment;
