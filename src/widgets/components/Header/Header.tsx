import { FC } from "react";
import styles from "./Header.module.scss";
import { Button, Text } from "../../../shared";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useBurgerMenu } from "../../store/burgerMenu.store";

export const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { isActive, setIsActive } = useBurgerMenu();

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
        <ul>
          <li>
            <Link to="about" smooth={true} onClick={() => navigate("/")}>
              <Text type="p2" color="#fff">
                О нас
              </Text>
            </Link>
          </li>
          <li>
            <Link to="products" smooth={true} onClick={() => navigate("/")}>
              <Text type="p2" color="#fff">
                Продукция
              </Text>
            </Link>
          </li>
          <li>
            <Link to="productions" smooth={true} onClick={() => navigate("/")}>
              <Text type="p2" color="#fff">
                Оптовая продажа
              </Text>
            </Link>
          </li>
          <li>
            <Link to="contacts" smooth={true} onClick={() => navigate("/")}>
              <Text type="p2" color="#fff">
                контакты
              </Text>
            </Link>
          </li>
        </ul>
        <ul className={styles.phone}>
          <li>
            <a href="#">
              <Text type="p2" color="#fff">
                +7 (999) 999-99-99
              </Text>
            </a>
          </li>
          <li>
            <Button>Связаться с нами</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
