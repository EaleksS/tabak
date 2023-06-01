import { FC } from "react";
import styles from "./Products.module.scss";
import {  Text } from "../../../shared";
import { Slider } from "../../../entities";

export const Products: FC = (): JSX.Element => {
  return (
    <div className={`${styles.products} wrapper`} id="products">
      <Text type="h2">
        <span>наша</span> продукция <br />
        Жевательный <span>табак</span>
      </Text>
      <Slider />
    </div>
  );
};
