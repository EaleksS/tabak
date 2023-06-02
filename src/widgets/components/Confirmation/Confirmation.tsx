import { FC, useEffect } from "react";
import styles from "./Confirmation.module.scss";
import { Modal } from "../../../entities";
import { useConfirmation } from "../../store/confirmation.store";
import { Button, Text } from "../../../shared";

export const Confirmation: FC = (): JSX.Element => {
  const { isActive, setIsActive, confirm, setConfirm } = useConfirmation();

  useEffect(() => {
    if (!confirm) return setIsActive(true);

    setIsActive(false);
  }, [confirm, setIsActive]);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  return (
    <Modal
      isActive={isActive}
      setIsActive={setIsActive}
      close={true}
      zIndex={6}
    >
      <div className={styles.confirmation}>
        <div className={styles.content}>
          <div style={{ textAlign: "center" }}>
            <Text type="h2" fw="600" fz="2rem">
              МИНЗДРАВСОЦРАЗВИТИЯ РФ ПРЕДУПРЕЖДАЕТ: "КУРЕНИЕ ОПАСНО ДЛЯ ВАШЕГО
              ЗДОРОВЬЯ"
            </Text>
            <Text type="p1">ВАМ УЖЕ ЕСТЬ 18 ЛЕТ?</Text>
            <Text type="p3" mt="1rem" fw="500">
              И вы даёте согласие на просмотр фото табачной продукции?
            </Text>
          </div>
          <Text type="p5" mt="1rem">
            Федеральный закон Российской Федерации от 23 февраля 2013 г. N 15-ФЗ
            "Об охране здоровья граждан от воздействия окружающего табачного
            дыма и последствий потребления табака" Для дальнейшего просмотра
            данного сайта Вам необходимо подтвердить свое совершеннолетие и дать
            согласие на просмотр фото сигар, сигарет, табачного сырья и
            аксессуаров к ним на основании Закона РФ "О ЗАЩИТЕ ПРАВ
            ПОТРЕБИТЕЛЕЙ" от 07.02.1992 N 2300-1(действующая редакция от
            13.07.2015)002E
          </Text>

          <Text type="p5" mt="1rem">
            <a href="#">перейти к законку</a>
          </Text>

          <div className={styles.btns}>
            <Button onClick={() => setConfirm(true)}>мне есть 18 лет</Button>
            <Button type="primary">мне нет 18 лет</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
