import { NavTabsType } from "@/types/Tabs";
import style from "./index.module.css";
const NavTabs = ({ items, active, toggle, activeColor, variant }: NavTabsType) => {
  return (
    <nav>
      <ul className={style.navTabs}>
        {items.map((label, index) => (
          <li key={index}>
            <button
              onClick={() => toggle(label)}
              className={`${style.navTab} ${
                active === label && style[activeColor]
              } ${style[variant]}`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavTabs;
