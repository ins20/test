import { AccordionType } from "@/types/Accordion";
import style from "./index.module.css";

const Accordion = ({ visibleSide, invisibleSide, isOpen }: AccordionType) => {
  return (
    <div className={style.accordion}>
      {visibleSide}
      {isOpen && invisibleSide}
    </div>
  );
};

export default Accordion;
