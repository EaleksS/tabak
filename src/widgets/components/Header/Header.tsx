import { FC } from "react";
import styles from "./Header.module.scss";
import { Button, Text } from "../../../shared";
import { useBurgerMenu } from "../../store/burgerMenu.store";
import { useContact } from "../../store/contact.store";
import { Nav } from "../../../entities";

export const Header: FC = (): JSX.Element => {
  const { isActive, setIsActive } = useBurgerMenu();
  const { setIsActive: setIsActiveContact } = useContact();

  return (
    <header className={`${styles.header} wrapper`}>
      <nav className={styles.nav}>
        <div
          className={`${styles.burger_menu} ${isActive && styles.active}`}
          onClick={() => setIsActive("reverse")}
        >
          <div className={styles.l1}></div>
          <div className={styles.l2}></div>
          <div className={styles.l3}></div>
        </div>
        <Nav />
        <ul className={styles.phone}>
          <li>
            <a href="tel:+79522823823">
              <Text type="p2" color="#fff">
                +7 (952) 282-38-23
              </Text>
            </a>
          </li>
          <li onClick={() => setIsActiveContact("reverse")}>
            <Button>Связаться с нами</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
