import style from './index.module.css';

import HeaderInfo from '@components/HeaderInfo';
import NavBar from '@components/NavBar';
import Container from '@ui/Container';

import { links } from '@utils/constants';

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <HeaderInfo />
      </Container>
      <NavBar items={links} />
    </header>
  );
};

export default Header;
