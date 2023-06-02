import { FC } from "react";
import styles from "./Footer.module.scss";
import { Text } from "../../../shared";

export const Footer: FC = (): JSX.Element => {
  return (
    <footer className={`${styles.footer}`} id="footer">
      <div className={`${styles.cont} wrapper`}>
        <Text type="p5" color="#989898" fz="12px">
          © 2023 TOBACCO. ВСЕ ПРАВА ЗАЩИЩЕНЫ. САЙТ ПРЕДНАЗНАЧЕН ДЛЯ ЛИЦ СТАРШЕ
          18 ЛЕТ. РАЗРАБОТЧИКИ WEB-DOMINANCE
        </Text>
      </div>
    </footer>
  );
};
