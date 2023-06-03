import { FC, useEffect, useRef, useState } from "react";
import styles from "./BurgerMenu.module.scss";
import { Modal, Nav } from "../../../entities";
import { useBurgerMenu } from "../../store/burgerMenu.store";
import { Text } from "../../../shared";

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
          <ul className={styles.phone}>
            <li>
              <a href="tel:+79522823823">
                <Text type="p2" color="#fff">
                  +7 (952) 282-38-23
                </Text>
              </a>
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
};
