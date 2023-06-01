import { FC } from "react";
import styles from "./Footer.module.scss";
import { Text } from "../../../shared";

export const Footer: FC = (): JSX.Element => {
  return (
    <footer className={`${styles.footer} wrapper`} id="footer">
      <div className={styles.cont}>
        <Text type="p5" color="#989898" fz="12px">
          (с) Все права защищены. Большой театр. 2020
        </Text>
        <Text type="p5" color="#989898" fz="12px">
          Разработано d-e-n.ru
        </Text>
      </div>
    </footer>
  );
};
