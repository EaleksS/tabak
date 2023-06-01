import { FC } from "react";
import styles from "./Card.module.scss";
import { Button, Text } from "../../../shared";

export const Card: FC = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src="/pre.jpg" alt="img" />
      </div>
      <div className={styles.content}>
        <Text type="p3">Дыня-Кокос</Text>

        <Text type="p5" mt="1rem">
          Снюс со вкусом Дыня кокос на основе цельного табачного листа. Купить
          снюс оптом в компании ARQ TOBACCO.
        </Text>

        <div className={styles.btn}>
          <Text type="p4" fw="600" mt="1rem">
            200P
          </Text>
          <Button mt="1rem">Заказать</Button>
        </div>
      </div>
    </div>
  );
};
