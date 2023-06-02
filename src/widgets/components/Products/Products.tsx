import { FC } from "react";
import styles from "./Products.module.scss";
import { Text } from "../../../shared";
import { Card2 } from "../../../entities";
// import { Slider } from "../../../entities";

export const Products: FC = (): JSX.Element => {
  return (
    <div className={`${styles.products} wrapper`} id="products">
      <Text type="h2">
        <span>наша</span> продукция <br />
        Жевательный <span>табак</span>
      </Text>
      <div className={styles.items}>
        {[1, 2, 3, 4, 5].map((e) => (
          <Card2 key={e} />
        ))}
      </div>
    </div>
  );
};
