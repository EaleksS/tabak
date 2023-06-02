import { FC, useEffect, useRef } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "../../../shared";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

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
    // const moving_value2 = Number(img2.current?.alt);
    // const moving_value3 = Number(img3.current?.alt);
    // const moving_value4 = Number(img4.current?.alt);
    // const moving_value5 = Number(img5.current?.alt);

    const x1 = e.clientX / 1000;
    const y1 = e.clientY / 500;

    const x2 = e.clientX / 1000;
    const y2 = e.clientY / 500;

    const x3 = e.clientX / 1000;
    const y3 = e.clientY / 500;

    const x4 = e.clientX / 1000;
    const y4 = e.clientY / 500;

    const x5 = e.clientX / 1000;
    const y5 = e.clientY / 500;

    img1.current.style.transform = `translateX(${x1}rem) translateY(${
      -20 + y1
    }rem)`;
    img2.current.style.transform = `translateX(${-x2}rem) translateY(${
      -15 + y2
    }rem)`;
    img3.current.style.transform = `translateX(${x3}rem) translateY(${
      -10 + y3
    }rem)`;
    img4.current.style.transform = `translateX(${-x4}rem) translateY(${
      -5 + y4
    }rem)`;
    img5.current.style.transform = `translateX(${x5}rem) translateY(${
      0 + y5
    }rem)`;
  };

  const data = [
    {
      ref: img1,
      css: styles.img1,
      id: 1,
    },
    {
      ref: img2,
      css: styles.img2,
      id: 1,
    },
    {
      ref: img3,
      css: styles.img3,
      id: 1,
    },
    {
      ref: img4,
      css: styles.img4,
      id: 1,
    },
    {
      ref: img5,
      css: styles.img5,
      id: 1,
    },
  ];

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
        <AnimatePresence>
          {data.map((e) => (
            <motion.img
              key={e.id}
              ref={e.ref}
              src="/img/2-6.png"
              alt="2"
              className={e.css}
              initial={{ opacity: 0, marginTop: "200px" }}
              animate={{ opacity: 1, marginTop: "0" }}
              transition={{ delay: e.id * 1 }}
            />
          ))}
        </AnimatePresence>
      </div>
      {/* <div className={styles.parallax_text}>
        <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
      </div> */}
    </div>
  );
};
