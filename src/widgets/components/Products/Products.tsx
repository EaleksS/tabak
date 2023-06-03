import { FC } from "react";
import styles from "./Products.module.scss";
import { Button, Text } from "../../../shared";
import { Card2 } from "../../../entities";
// import { Slider } from "../../../entities";

export const Products: FC = (): JSX.Element => {
  return (
    <div className={`${styles.products} wrapper`} id="products">
      <div className={styles.title}>
        <Text type="h2">
          Жевательный <span>табак</span>
        </Text>
        <div className={styles.back}>products</div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.items}>
        {[1, 2, 3, 4, 5].map((e) => (
          <Card2 key={e} />
        ))}
      </div>
      <div className={styles.block}>
        <Text type="h3" color="#fff" fw="600">
          Жевательный табак - это легально
        </Text>
        <Text mt="2rem" color="#fff" type="p3">
          Представляем документы и рассказываем, <br /> почему наш продукт -
          абсолютно легален
        </Text>
        <div className={styles.btns}>
          <Button>Подробнее</Button>
          <Button type="primary">Документы</Button>
        </div>
      </div>
    </div>
  );
};
