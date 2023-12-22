export type ModalType = {
  isShowModal: boolean;
  wrapperRef: React.MutableRefObject<HTMLDivElement | null>;
  children: React.ReactNode;
};
