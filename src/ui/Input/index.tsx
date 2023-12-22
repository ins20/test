import { InputType } from "@/types/Input";
import style from "./index.module.css";
import useInput from "@/hooks/useInput";

const Input = ({ defaultValue, label, icon, ...props }: InputType) => {
  const { value, handleChange } = useInput(defaultValue, props.type);

  return (
    <div className={style.field}>
      {label && (
        <label className={style.label} htmlFor={label}>
          {label}
        </label>
      )}

      <div className={style.iconInput}>
        {icon && icon}
        <input
          type="text"
          id={label}
          {...props}
          className={style.input}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default Input;
