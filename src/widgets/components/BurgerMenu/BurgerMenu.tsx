import { FC, useEffect, useRef, useState } from "react";
import styles from "./BurgerMenu.module.scss";
import { Modal, Nav } from "../../../entities";
import { useBurgerMenu } from "../../store/burgerMenu.store";
import { Link } from "react-scroll";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaVk, FaYoutube } from "react-icons/fa";

export const BurgerMenu: FC = (): JSX.Element => {
  const { isActive, setIsActive } = useBurgerMenu();

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
            <Nav setIsActive={setIsActive} />
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
