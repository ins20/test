import { useRef, useState, useEffect, useCallback } from "react";

const useModal = () => {
  const [isShowModal, setModalState] = useState(false);

  const wrapperRef = useRef(null);

  const toggleModal = useCallback(() => {
    setModalState((prevState) => !prevState);
  }, []);

  const closeModal = useCallback(
    ({ target }: MouseEvent | TouchEvent) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(target as Node)
      ) {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    document.addEventListener("click", closeModal, { capture: true });

    return () => {
      document.removeEventListener("click", closeModal, { capture: true });
    };
  }, [closeModal]);

  useEffect(() => {
    if (isShowModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShowModal]);
  return {
    isShowModal,
    toggleModal,
    wrapperRef,
  };
};

export default useModal;
