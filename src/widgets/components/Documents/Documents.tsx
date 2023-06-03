import { FC } from "react";
import styles from "./Documents.module.scss";
import { Slider } from "../../../entities";
import { Text } from "../../../shared";
import { Variants, motion } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const Documents: FC = (): JSX.Element => {
  return (
    <motion.div
      className={`${styles.documents} wrapper`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
    >
      <div className={styles.title}>
        <Text type="h2">
          документы <span>и</span> сертификаты
        </Text>
        <div className={styles.back}>documents</div>
        <div className={styles.line}></div>
      </div>
      <Slider type="documents" />
    </motion.div>
  );
};
