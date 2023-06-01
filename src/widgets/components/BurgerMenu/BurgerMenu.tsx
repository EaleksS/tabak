import { FC, useEffect, useRef, useState } from "react";
import styles from "./BurgerMenu.module.scss";
import { Modal } from "../../../entities";
import { useBurgerMenu } from "../../store/burgerMenu.store";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { Text } from "../../../shared";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaVk, FaYoutube } from "react-icons/fa";

export const BurgerMenu: FC = (): JSX.Element => {
  const { isActive, setIsActive } = useBurgerMenu();
  const navigate = useNavigate();

  const close = () => {
    setIsActive(false);
    navigate("/");
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  // Плавный переход
  const [renderScroll] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  function scrollToMyElement() {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToMyElement();
  }, [renderScroll, isActive]);
  // /Плавный переход

  return (
    <>
      <div ref={sectionRef}></div>
      <Modal isActive={isActive} setIsActive={setIsActive}>
        <div className={styles.burger_menu}>
          <nav>
            <ul>
              <li>
                <Link to="wrapper" smooth={true} onClick={close}>
                  <Text type="p2" color="#fff">
                    Главная
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} onClick={close}>
                  <Text type="p2" color="#fff">
                    о театре
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="productions" smooth={true} onClick={close}>
                  <Text type="p2" color="#fff">
                    Наши постановки
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="partners" smooth={true} onClick={close}>
                  <Text type="p2" color="#fff">
                    партнеры театра
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
          </nav>
          <div className={styles.social}>
            <Link to=".#">
              <FiInstagram className={styles.icon} />
            </Link>
            <Link to=".#">
              <FaFacebookF className={styles.icon} />
            </Link>
            <Link to=".#">
              <FaVk className={styles.icon} />
            </Link>
            <Link to=".#">
              <FaYoutube className={styles.icon} />
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};
