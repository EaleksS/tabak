import { CSSProperties, FC, ReactNode } from "react";
import styles from "./Text.module.scss";

interface Props {
  children: ReactNode;
  type?: "p1" | "h1" | "h2" | "h3" | "p2" | "p3" | "p4" | "p5";
  mt?: string;
  fz?: string | number;
  fw?: string;
  lh?: string | number;
  color?: string;
}

export const Text: FC<Props> = ({
  children,
  type = "p",
  mt = "0",
  fz,
  fw,
  lh,
  color,
}): JSX.Element => {
  const styleComp: CSSProperties = {
    marginTop: mt,
    fontSize: fz,
    fontWeight: fw,
    lineHeight: lh,
    color: color,
  };

  switch (type) {
    case "h1":
      return (
        <h1 className={styles.h1} style={styleComp}>
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2 className={styles.h2} style={styleComp}>
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={styles.h3} style={styleComp}>
          {children}
        </h3>
      );

    case "p2":
      return (
        <p className={styles.p2} style={styleComp}>
          {children}
        </p>
      );

    case "p3":
      return (
        <p className={styles.p3} style={styleComp}>
          {children}
        </p>
      );

    case "p4":
      return (
        <p className={styles.p4} style={styleComp}>
          {children}
        </p>
      );

    case "p5":
      return (
        <p className={styles.p5} style={styleComp}>
          {children}
        </p>
      );

    default:
      return (
        <p className={styles.p1} style={styleComp}>
          {children}
        </p>
      );
  }
};
