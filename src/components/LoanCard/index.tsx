import style from "./index.module.css";

import Button from "@ui/Button";
import Modal from "@ui/Modal";
import Accordion from "@ui/Accordion";
import NavTabs from "@ui/Tabs";
import Alert from "@/ui/Alert";
import DatePicker from "@ui/Calendar";

import Payment from "@components/Payment";

import useModal from "@hooks/useModal";
import useAccordion from "@hooks/useAccordion";
import useTabs from "@hooks/useTabs";
import { LoanType } from "@/types/Loan";
import { formatNumber } from "@/utils/helpers";
import Icon from "@/assets/Icon";

const LoanCard = ({
  id,
  date,
  sum,
  surchargeDate,
  ransomDate,
  endDate,
  percent,
}: LoanType) => {
  const { isOpen, toggleAccordion } = useAccordion();
  const { isShowModal, wrapperRef, toggleModal } = useModal();

  const dataTabs = {
    "Продлить займ": (
      <>
        <DatePicker ransomDate={ransomDate} endDate={endDate} />{" "}
        <Alert
          text={`Для продления займа оплатите проценты не позднее ${endDate}`}
          style={{
            padding: "16px 24px ",
            marginTop: 25,
            boxShadow: "none",
            height: 56,
          }}
        />
      </>
    ),
    "Погасить займ": <>Погасить займ</>,
    "Объекты залога": <>Объекты залога</>,
    Документы: (
      <div className={style.contractContent}>
        <div className={style.data}>
          <p className={style.title} style={{ marginTop: 6 }}>
            Дата
          </p>
          <span>
            <time dateTime={surchargeDate}>{surchargeDate}</time>
          </span>
        </div>
        <div className={style.data}>
          <p className={style.title} style={{ marginTop: 6 }}>
            Наименование
          </p>
          <div className={style.contract}>
            <span>Договор №123456 на получение займа.pdf</span>

            <Icon id="download" viewBox="0 0 24 24" width={24} height={24} />
          </div>
        </div>
      </div>
    ),
  };

  const { toggleTab, activeTab, tabs, activeTabLabel } = useTabs(dataTabs);

  return (
    <div className={style.loanCard}>
      <Accordion
        visibleSide={
          <>
            <div className={style.cardHeader}>
              <span className={style.id}>{id}</span>
              <time className={style.date} dateTime={date}>
                от {date}
              </time>
              <span className={style.right}>
                {formatNumber(sum)} ₽
                <Icon
                  id="arrow"
                  viewBox="0 0 14 7"
                  width={14}
                  height={7}
                  className={style.toggle}
                  onClick={toggleAccordion}
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </span>
            </div>
            <div className={style.cardContent}>
              <div className={style.data}>
                <p className={style.title}>Дата перезалога</p>
                <span>
                  <time dateTime={surchargeDate}>{surchargeDate}</time>
                </span>
              </div>
              <div className={style.data}>
                <p className={style.title}>Дата выкупа</p>
                <span>
                  <time dateTime={ransomDate}>{ransomDate}</time>
                </span>{" "}
              </div>
              <div className={style.data}>
                <p className={style.title}>Дата окончания льготного срока</p>
                <span>
                  {" "}
                  <time dateTime={endDate}>{endDate}</time>
                </span>
              </div>
              <div className={style.data}>
                <p className={style.title}>Проценты</p>
                <span> {formatNumber(percent)} ₽</span>
              </div>
              <Button onClick={toggleModal} variant={"outlined"}>
                Оплатить проценты
              </Button>
              <Modal isShowModal={isShowModal} wrapperRef={wrapperRef}>
                <Payment amount={percent} />
              </Modal>
            </div>
          </>
        }
        invisibleSide={
          <div className={style.cardFooter}>
            <NavTabs
              items={tabs}
              toggle={toggleTab}
              active={activeTabLabel}
              activeColor={"blue"}
              variant={"small"}
            />
            <div className={style.tab}>{activeTab as React.ReactNode}</div>
          </div>
        }
        isOpen={isOpen}
      />
    </div>
  );
};

export default LoanCard;
