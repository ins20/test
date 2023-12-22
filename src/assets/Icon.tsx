import { IconType } from "@/types/Icon";
import sprite from "./sprite.svg";

const Icon = ({ id, ...props }: IconType) => {
  return (
    <svg {...props}>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </svg>
  );
};

export default Icon;
