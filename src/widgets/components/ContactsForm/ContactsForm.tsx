import { FC, useState } from "react";
import styles from "./ContactsForm.module.scss";
import { Modal } from "../../../entities";
import { useContact } from "../../store/contact.store";
import { Button, Input, Text } from "../../../shared";
import { IoMdCloseCircle } from "react-icons/io";

export const ContactsForm: FC = (): JSX.Element => {
  const { isActive, setIsActive } = useContact();

  const [valueName, setValueName] = useState<string>("");
  const [valueTel, setValueTel] = useState<string>("");
  const [valueMess, setValueMess] = useState<string>("");

  return (
    <Modal setIsActive={setIsActive} isActive={isActive} zIndex={6}>
      <div className={styles.contact}>
        <Text type="h3">Связаться с нами</Text>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.close} onClick={() => setIsActive(false)}>
            <IoMdCloseCircle />
          </div>
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
            <Button mt="1rem">
              <Text type="p2" color="#fff">
                отправить
              </Text>
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
