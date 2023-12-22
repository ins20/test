import style from "./index.module.css";

import Loans from "@components/Loans";
import Payment from "@components/Payment";
import Profile from "@components/Profile";

import NavTabs from "@ui/Tabs";
import Container from "@ui/Container";
import Wrapper from "@ui/Wrapper";
import Button from "@ui/Button";
import Modal from "@ui/Modal";

import useModal from "@hooks/useModal";
import useTabs from "@hooks/useTabs";

const tabsData = {
  "Мои займы": <Loans />,
  Профиль: <Profile />,
};

const PersonalAccount = () => {
  const { isShowModal, wrapperRef, toggleModal } = useModal();

  const { toggleTab, activeTab, tabs, activeTabLabel } = useTabs(tabsData);

  return (
    <Container>
      <Wrapper>
        <NavTabs
          items={tabs}
          active={activeTabLabel}
          toggle={toggleTab}
          activeColor={"green"}
          variant={"large"}
        />
        <div className={style.content}>
          <div className={style.tab}>{activeTab as React.ReactNode}</div>
          <div className={style.totalPercent}>
            <p className={style.title}>Проценты по 3 билетам </p>
            <p className={style.loans}>
              Общая сумма займов: <span>16 800 ₽</span>{" "}
            </p>
            <p className={style.total}>
              Итого процентов: <span>4 350 ₽</span>
            </p>
            <Button
              onClick={toggleModal}
              variant={"contained"}
              style={{ marginTop: 42, width: "100%" }}
            >
              Оплатить все проценты
            </Button>
            <Modal isShowModal={isShowModal} wrapperRef={wrapperRef}>
              <Payment amount={4350} />
            </Modal>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default PersonalAccount;
