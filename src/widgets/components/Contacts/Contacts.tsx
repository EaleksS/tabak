import { FC, useState } from "react";
import styles from "./Contacts.module.scss";
import { Button, Input, Text } from "../../../shared";
import { MapYan } from "../../../entities";
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

export const Contacts: FC = (): JSX.Element => {
  const [valueName, setValueName] = useState<string>("");
  const [valueTel, setValueTel] = useState<string>("");
  const [valueMess, setValueMess] = useState<string>("");

  return (
    <motion.div
      className={`${styles.contacts} wrapper`}
      id="contacts"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
    >
      <div className={styles.title}>
        <Text type="h2">контакты</Text>
        <div className={styles.back}>contacts</div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.container}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <Input
                type="email"
                placholder="Почта"
                value={valueName}
                setValue={setValueName}
              />
              <Input
                type="tel"
                placholder="Телефон *"
                value={valueTel}
                setValue={setValueTel}
              />
            </div>
            <div className={styles.textarea}>
              <Input
                type="textarea"
                value={valueMess}
                setValue={setValueMess}
                placholder="Сообщение"
              />
            </div>
          </div>
          <div className={styles.info}>
            {/* <Text type="p5">
              * Ваши данные не будут переданы третьим лицам, 100% вероятность.
              Конфиденциальность мы гарантируем, и защищаем персональные данные
              согласно законку ФЗ-52.
            </Text> */}
            <Button>
              <Text type="p2" color="#fff">
                отправить
              </Text>
            </Button>
          </div>
        </form>
        <div className={styles.map}>
          <MapYan />
        </div>
      </div>
    </motion.div>
  );
};
