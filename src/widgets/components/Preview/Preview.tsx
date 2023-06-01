import { FC } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "../../../shared";

export const Preview: FC = (): JSX.Element => {
  return (
    <div className={`${styles.preview} wrapper`}>
      <div className={styles.title}>
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
      </div>
      <div className={styles.img}>
        <img src="/img/2.png" alt="img" className={styles.img1} />
      </div>
    </div>
  );
};
