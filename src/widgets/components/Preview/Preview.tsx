import { FC, useEffect, useRef } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "../../../shared";
import { motion } from "framer-motion";

export const Preview: FC = (): JSX.Element => {
  const img1 = useRef<HTMLImageElement>(null);
  const img2 = useRef<HTMLImageElement>(null);
  const img3 = useRef<HTMLImageElement>(null);
  const img4 = useRef<HTMLImageElement>(null);
  const img5 = useRef<HTMLImageElement>(null);

  const parallax = (e: MouseEvent) => {
    if (
      !img1.current ||
      !img2.current ||
      !img3.current ||
      !img4.current ||
      !img5.current
    )
      return;

    // const moving_value1 = Number(img1.current?.alt);
    const moving_value2 = Number(img2.current?.alt);
    const moving_value3 = Number(img3.current?.alt);
    const moving_value4 = Number(img4.current?.alt);
    const moving_value5 = Number(img5.current?.alt);

    const x1 = (e.clientX * 10) / 5000;
    // const y1 = (e.clientY * moving_value1) / 100;

    const x2 = (e.clientX * moving_value2) / 2000;
    // const y2 = (e.clientY * moving_value2) / 100;

    const x3 = (e.clientX * moving_value3) / 2000;
    // const y3 = (e.clientY * moving_value3) / 100;

    const x4 = (e.clientX * moving_value4) / 2000;
    // const y4 = (e.clientY * moving_value4) / 100;

    const x5 = (e.clientX * moving_value5) / 2000;
    // const y5 = (e.clientY * moving_value5) / 100;

    img1.current.style.transform = `translateX(${x1}rem) translateY(${-20}rem)`;
    img2.current.style.transform = `translateX(${-x2}rem) translateY(${-15}rem)`;
    img3.current.style.transform = `translateX(${x3}rem) translateY(${-10}rem)`;
    img4.current.style.transform = `translateX(${-x4}rem) translateY(${-5}rem)`;
    img5.current.style.transform = `translateX(${x5}rem) translateY(${0}rem)`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", parallax);

    return () => document.removeEventListener("mousemove", parallax);
  }, []);

  return (
    <div className={`${styles.preview} wrapper`}>
      <motion.div
        className={styles.title}
        initial={{ y: -200, opacity: 0, scale: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Text type="h1" color="#fff">
          ТАБАЧНАЯ КОМПАНИЯ
        </Text>
        <Text type="p3" mt="3rem" color="#fff">
          Российское производство табачных изделий, <br /> изготовленный с
          применением инновационных
          <br /> технологий и лучших сортов табака
        </Text>
        <Button mt="3rem">
          <Text type="p2" color="#fff">
            продукция
          </Text>
        </Button>
      </motion.div>
      <div className={styles.img}>
        <img ref={img1} src="/img/2-6.png" alt="1" className={styles.img1} />
        <img ref={img2} src="/img/2-6.png" alt="2" className={styles.img2} />
        <img ref={img3} src="/img/2-6.png" alt="3" className={styles.img3} />
        <img ref={img5} src="/img/2-6.png" alt="5" className={styles.img4} />
        <img ref={img4} src="/img/2-6.png" alt="4" className={styles.img5} />
      </div>
    </div>
  );
};
