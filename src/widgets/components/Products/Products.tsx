import { FC } from "react";
import styles from "./Products.module.scss";
import { Button, Text } from "../../../shared";
import { Card2 } from "../../../entities";
// import { Slider } from "../../../entities";

const data = [
  {
    id: 1,
    url: "/img/2-6m.png",
    fruit: "/img/f11.png",
    title: "Мята - Cold dry ",
    desc: "Идеальный баланс шведской классики и современной практичности. Умеренный уровень крепости даёт полный контроль над эйфорией.",
  },
  {
    id: 2,
    url: "/img/2-7m.png",
    fruit: "/img/f2.png",
    title: "Манго",
    desc: "Идеальный баланс шведской классики и современной практичности. Умеренный уровень крепости даёт полный контроль над эйфорией.",
  },
  {
    id: 3,
    url: "/img/2-8m.png",
    fruit: "/img/f3.png",
    title: "Персик",
    desc: "Идеальный баланс шведской классики и современной практичности. Умеренный уровень крепости даёт полный контроль над эйфорией.",
  },
  {
    id: 4,
    url: "/img/2-9m.png",
    fruit: "/img/f4.png",
    title: "Виноград",
    desc: "Идеальный баланс шведской классики и современной практичности. Умеренный уровень крепости даёт полный контроль над эйфорией.",
  },
  {
    id: 5,
    url: "/img/2-10m.png",
    fruit: "/img/f5.png",
    title: "Барбарис",
    desc: "Идеальный баланс шведской классики и современной практичности. Умеренный уровень крепости даёт полный контроль над эйфорией.",
  },
];

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
        {data.map((e) => (
          <Card2 key={e.id} {...e} />
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
