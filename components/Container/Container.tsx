import styles from "./Container.module.css";

import { FC } from "react";

type ContainerProps = {
  children: JSX.Element;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
