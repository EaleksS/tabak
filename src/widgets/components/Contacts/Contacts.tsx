import { FC, useState } from "react";
import styles from "./Contacts.module.scss";
import { Button, Input, Text } from "../../../shared";
import { MapYan } from "../../../entities";

export const Contacts: FC = (): JSX.Element => {
  const [valueName, setValueName] = useState<string>("");
  const [valueTel, setValueTel] = useState<string>("");
  const [valueMess, setValueMess] = useState<string>("");

  return (
    <div className={`${styles.contacts} wrapper`} id="contacts">
      <Text type="h2">контакты</Text>

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
    </div>
  );
};
