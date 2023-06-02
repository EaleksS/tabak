import { FC } from "react";
import styles from "./Documents.module.scss";
import { Slider } from "../../../entities";
import { Text } from "../../../shared";

export const Documents: FC = (): JSX.Element => {
  return (
    <div className={`${styles.documents} wrapper`}>
      <Text type="h2">
        документы <span>и</span> сертификаты
      </Text>
      <Slider type="documents" />
    </div>
  );
};
