import { FC } from "react";
import styles from "./Products.module.scss";
import { Button, Text } from "../../../shared";
import { Card2 } from "../../../entities";
import { useDocument } from "../../store/document.store";
import { Link } from "react-scroll";
// import { Slider } from "../../../entities";

const data = [
  {
    id: 1,
    url: "/img/card/c1.png",
    fruit: "/img/f11.png",
    title: "Мята - Cold dry ",
    desc: " Крепкий, мощный, выраженный вкус мяты, который сочетает в себе еле ощутимые нотки сладости подарит легкое покалывание и приятный холодок после каждого употребления.",
  },
  {
    id: 2,
    url: "/img/card/c2.png",
    fruit: "/img/f2.png",
    title: "Манго",
    desc: "Идеальный баланс шведской классики и современной практичности. Умеренный уровень крепости даёт полный контроль над эйфорией.",
  },
  {
    id: 3,
    url: "/img/card/c3.png",
    fruit: "/img/f3.png",
    title: "Персик",
    desc: "Жевательный табак с приятным и ярким, сочным персиком. Отличный вкус с умеренным жжением, стильный дизайн и невероятное послевкусие.",
  },
  {
    id: 4,
    url: "/img/card/c4.png",
    fruit: "/img/f4.png",
    title: "Виноград",
    desc: "Ароматная и вкусная смесь из табака, приправленная виноградным вкусом. Может быть интересным выбором для любителей винограда и оригинальных вкусовых сочетаний.",
  },
  {
    id: 5,
    url: "/img/card/c5.png",
    fruit: "/img/f5.png",
    title: "Барбарис",
    desc: "Яркий вкус барбариса в точности передаст аромат и вкус любимых конфеток. Не превзойдённое послевкусие и качественное никотиновое насыщение.",
  },
];

export const Products: FC = (): JSX.Element => {
  const { setIsActive } = useDocument();

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
          <Link to="about" smooth={true}>
            <Button>Подробнее</Button>
          </Link>
          <Button type="primary" onClick={() => setIsActive(true)}>
            Документы
          </Button>
        </div>
      </div>
    </div>
  );
};
