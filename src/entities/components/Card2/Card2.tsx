import { FC, useEffect, useRef } from "react";
import styles from "./Card2.module.scss";
import { Text } from "../../../shared";
import { Variants, motion } from "framer-motion";

export const Card2: FC = (): JSX.Element => {
  const img1 = useRef<HTMLImageElement>(null);
  const img2 = useRef<HTMLImageElement>(null);
  const img3 = useRef<HTMLImageElement>(null);

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const parallax = (e: MouseEvent) => {
    if (!img1.current || !img2.current || !img3.current) return;

    // const moving_value1 = Number(img1.current?.alt);
    // const moving_value2 = Number(img2.current?.alt);
    // const moving_value3 = Number(img3.current?.alt);
    // const moving_value4 = Number(img4.current?.alt);
    // const moving_value5 = Number(img5.current?.alt);

    const x1 = e.clientX / 200;
    const y1 = e.clientY / 200;

    const x2 = e.clientX / 200;
    const y2 = e.clientY / 200;

    const x3 = e.clientX / 200;
    const y3 = e.clientY / 200;

    img1.current.style.transform = `translateX(${x1}px) translateY(${y1}px)`;
    img2.current.style.transform = `translateX(${x2}px) translateY(${y2}px)`;
    img3.current.style.transform = `translateX(${-x3}px) translateY(${y3}px)`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", parallax);

    return () => document.removeEventListener("mousemove", parallax);
  }, []);

  return (
    <motion.div
      className={styles.card}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className={styles.img} variants={cardVariants}>
        <img ref={img3} src="/img/2-6.png" alt="img" />
        <img
          ref={img1}
          src="/img/green.png"
          alt="img"
          className={styles.green}
        />
        <img
          ref={img2}
          src="/img/kiwi.png"
          alt="img"
          className={styles.jerry}
        />
      </motion.div>
      <div className={styles.content}>
        <Text type="h3">ODEN’S COLD DRY</Text>
        <Text type="p4">
          Идеальный баланс шведской классики и современной практичности.
          Умеренный уровень крепости даёт полный контроль над эйфорией.
        </Text>
        <div className={styles.info}>
          <div className={styles.g} style={{ background: "#222222" }}>
            13 г
          </div>
          <div className={styles.g}>20 мг</div>
        </div>
      </div>
    </motion.div>
  );
};
