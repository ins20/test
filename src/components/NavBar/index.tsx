import { NavItemsType } from "@/types/NavItem";
import style from "./index.module.css";
import Container from "@ui/Container";
import Icon from "@/assets/Icon";

const NavBar = ({ items }: NavItemsType) => {
  return (
    <nav className={style.nav}>
      <Container>
        <ul className={style.links}>
          {items.map(({ text, href }, index) => (
            <li className={style.item} key={index}>
              <a href={href} className={style.link}>
                {text}
              </a>
            </li>
          ))}
          <li className={style.find}>
            <Icon id="find" viewBox="0 0 24 24" width="24" height="24" />
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
