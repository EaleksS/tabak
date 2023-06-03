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
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
    >
      <div className={styles.title}>
        <Text type="h2">контакты</Text>
        <div className={styles.back}>contacts</div>
        <div className={styles.line}></div>
      </div>

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

      <div className={styles.container}>
        <div className={styles.informa}>
          <Text type="p3" fw="400">
            <a href="tel:+79522823823">+7 (952) 282-38-23</a>
          </Text>
          <Text type="p4" fw="500">
            Телефон
          </Text>

          <Text type="p3" mt="1rem" fw="400" color="#333">
            <a href="mailto:tobacco-spb@yandex.ru">tobacco-spb@yandex.ru</a>
          </Text>
          <Text type="p5" fw="500">
            Почта
          </Text>

          <Text type="p3" mt="1rem" fw="400" color="#333">
            ООО Афина ИНН 7816733929
          </Text>
          <Text type="p5" fw="500">
            Компания
          </Text>

          <Text type="p3" mt=".5rem" fw="400" color="#333">
            192236, г Санкт-Петербург, ул Белы Куна, Д 32
          </Text>
          <Text type="p5" fw="500">
            Адрес
          </Text>
        </div>
        <div className={styles.map}>
          <MapYan />
        </div>
      </div>
    </motion.div>
  );
};
