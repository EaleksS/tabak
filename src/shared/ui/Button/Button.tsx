import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  type?: "default" | "primary";
  children: ReactNode;
  onClick?: () => void;
  mt?: string;
  isActive?: boolean | undefined;
}

export const Button: FC<Props> = ({
  type = "default",
  children,
  mt = "0",
  onClick,
  isActive = undefined,
}): JSX.Element => {
  switch (type) {
    case "primary":
      return (
        <button
          className={`${styles.btn} ${styles.default} ${
            isActive && styles.active
          } ${isActive === undefined && styles.def}`}
          style={{ marginTop: mt }}
          onClick={onClick}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          className={`${styles.btn} ${styles.default} ${
            isActive && styles.active
          } ${isActive === undefined && styles.def}`}
          style={{ marginTop: mt }}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};
