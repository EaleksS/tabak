import { FC } from "react";
import styles from "./Advantages.module.scss";
import { Text } from "../../../shared";

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
          <img src="/img/conveyor.svg" alt="conveyor" />
          <Text type="h3">Производство и технологии</Text>
          <Text type="p5">
            Собственная производственная линия и использование современных
            технологий гарантируют высокие стандарты качества наших табачных
            изделий.
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/img/tobaccos.svg" alt="tobaccos" />
          <Text type="h3">
            Табак и <br /> добавки
          </Text>
          <Text type="p5">
            Используем высокосортный цельнолистовой табак «Вирджиния» из Индии,
            натуральные компоненты и ароматизаторы, оптимально подходящие для
            изготовления жевательного табака.
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/img/certificate.svg" alt="certificate" />
          <Text type="h3">Легальность и маркировка</Text>
          <Text type="p5">
            Создаём абсолютно легальный продукт с наличием сертификатов и
            декларации соответствия. На всю продукцию нанесены акцизные марки и
            коды системы маркировки «Честный знак».
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/img/rising.svg" alt="rising" />
          <Text type="h3">Развитие и внимательность</Text>
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
