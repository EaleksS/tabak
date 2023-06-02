import { FC } from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-scroll";
import { Text } from "../../../shared";
import { useNavigate } from "react-router-dom";

interface Props {
  setIsActive?: (bool: boolean) => void;
}

export const Nav: FC<Props> = ({ setIsActive }): JSX.Element => {
  const navigate = useNavigate();

  const close = () => {
    setIsActive && setIsActive(false);
    navigate("/");
  };

  return (
    <ul className={styles.ul}>
      <li>
        <Link to="about" smooth={true} onClick={close}>
          <Text type="p2" color="#fff">
            О нас
          </Text>
        </Link>
      </li>
      <li>
        <Link to="products" smooth={true} onClick={close}>
          <Text type="p2" color="#fff">
            Продукция
          </Text>
        </Link>
      </li>
      <li>
        <Link to="productions" smooth={true} onClick={close}>
          <Text type="p2" color="#fff">
            Оптовая продажа
          </Text>
        </Link>
      </li>
      <li>
        <Link to="contacts" smooth={true} onClick={close}>
          <Text type="p2" color="#fff">
            контакты
          </Text>
        </Link>
      </li>
    </ul>
  );
};
