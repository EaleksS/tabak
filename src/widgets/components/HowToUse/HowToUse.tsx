import { FC } from "react";
import styles from "./HowToUse.module.scss";
import { Text } from "../../../shared";

export const HowToUse: FC = (): JSX.Element => {
  return (
    <div className={`${styles.how_to_use} wrapper`} id="howtouse">
      <div className={styles.title}>
        <Text type="h2">
          <span>КАК</span> ИСПОЛЬЗОВАТЬ?
        </Text>
        <div className={styles.back}>how to use</div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <Text type="h3">ПОЛОЖИ ПАКЕТИК ПОД ВЕРХНЮЮ ГУБУ</Text>
          <Text type="p4" fw="20px">
            Справа или слева, желательно чередовать стороны, чтобы избежать
            раздражения слизистой.
          </Text>
          <div className={styles.btns}>
            <div className={styles.num}>01</div>
          </div>
        </div>
        <div className={styles.item}>
          <Text type="h3">СМОЧИ СЛЮНОЙ, И НЕМНОГО ПРИЖМИ</Text>
          <Text type="p4" fw="20px">
            Держи от 10 минут до 1 часа. Именно за это время никотин попадает в
            организм.
          </Text>
          <div className={styles.btns}>
            <div className={styles.num}>02</div>
          </div>
        </div>
        <div className={styles.item}>
          <Text type="h3">ПОЛУЧАЙ УДОВОЛЬСТВИЕ</Text>
          <Text type="p4" fw="20px">
            Убери использованный пакетик в верхнее отделение банки.
          </Text>
          {/* <button className={styles.view}>
            Подробнее <TiArrowRight className={styles.icon} />
          </button> */}
          <div className={styles.btns}>
            <div className={styles.num}>03</div>
          </div>
        </div>
      </div>
    </div>
  );
};
