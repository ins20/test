import style from "./index.module.css";
const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default Wrapper;
