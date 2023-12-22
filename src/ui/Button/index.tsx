import { ButtonType } from "@/types/Button";
import style from "./index.module.css";
const Button = ({ color, children, variant, ...props }: ButtonType) => {
  return (
    <button
      {...props}
      className={`${style.button} ${variant && style[variant]} ${
        color && style[color]
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
