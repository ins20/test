import style from "./index.module.css";
const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
