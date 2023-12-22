import { createPortal } from "react-dom";

import style from "./index.module.css";
import { ModalType } from "@/types/Modal";

const Modal = ({ isShowModal, wrapperRef, children }: ModalType) => {
  return (
    <>
      {isShowModal
        ? createPortal(
            <>
              <div className={style.windowContainer}>
                <div className={style.modalContainer}>
                  <div ref={wrapperRef} className={style.modal}>
                    {children}
                  </div>
                </div>
              </div>
            </>,
            document.body
          )
        : null}
    </>
  );
};
export default Modal;
