import { FC } from "react";
import styles from "./Advantages.module.scss";
import { Text } from "../../../shared";
import {
  FcBullish,
  FcDiploma1,
  FcCheckmark,
  FcDeployment,
} from "react-icons/fc";

export const Advantages: FC = (): JSX.Element => {
  return (
    <div className={`${styles.advantages} wrapper`}>
      <div className={styles.title}>
        <Text type="h2">
          Наши основные <span>преимущества</span>
        </Text>
        <div className={styles.back}>Advantages</div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <FcDeployment className={styles.icon} />
          <Text type="h3">
            Производство и <br /> технологии
          </Text>
          <Text type="p5">
            Собственная производственная линия и использование современных
            технологий гарантируют высокие стандарты качества наших табачных
            изделий.
          </Text>
        </div>
        <div className={styles.item}>
          <FcCheckmark className={styles.icon} />
          <Text type="h3">
            Табак и <br /> добавки
          </Text>
          <Text type="p5">
            Используем высокосортный цельнолистовой табак «Берли» из Мексики,
            натуральные компоненты и ароматизаторы, оптимально подходящие для
            изготовления жевательного табака.
          </Text>
        </div>
        <div className={styles.item}>
          <FcDiploma1 className={styles.icon} />
          <Text type="h3">
            Легальность и <br /> маркировка
          </Text>
          <Text type="p5">
            Создаём абсолютно легальный продукт с наличием сертификатов и
            декларации соответствия. На всю продукцию нанесены акцизные марки и
            коды системы маркировки «Честный знак».
          </Text>
        </div>
        <div className={styles.item}>
          <FcBullish className={styles.icon} />
          <Text type="h3">
            Развитие и <br /> внимательность
          </Text>
          <Text type="p5">
            Постоянно развиваемся. Увеличиваем производство и разрабатываем
            новые линейки продукции. Всегда готовы ответить на вопросы и принять
            во внимание Ваши пожелания.
          </Text>
        </div>
      </div>
    </div>
  );
};
