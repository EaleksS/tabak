import { FC } from "react";
import styles from "./About.module.scss";
import { Text } from "../../../shared";
import { Variants, motion } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const About: FC = (): JSX.Element => {
  return (
    <motion.div
      className={`${styles.about} `}
      id="about"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
    >
      <div className={styles.title}>
        <Text type="h2" color="#fff">
          <span>о</span> компании
        </Text>
        <div className={styles.back}>about</div>
        <div className={styles.line}></div>
      </div>
      <div className={`${styles.items} wrapper`}>
        <div className={styles.title2}>
          <Text color="#fff">Производство табачных изделий</Text>
          <Text type="p4" mt="40px" color="#fff">
            Купить Табак «Табак-спб.рф» — это поставщик первоклассного и
            качественного табака. Мы находимся в Санкт-Петербурге. Всегда рады
            всем своим клиентам которые решили посетить наш интернет магазин по
            продаже табака для самокруток. Мы постарались создать удобный и
            информативный сайт для покупки табака по всей России. Наши клиенты
            всегда остаются очень довольны нашим товаром и возвращаются к нам
            вновь.
            <br />
            <br />
            Сигареты перестали быть просто привычкой или средством для снятия
            стресса, а найти качественный табак сейчас стало еще сложней. Наш
            интернет магазин предлагает купить качественный табак по самой
            выгодной цене, так же у нас имеются в продаже бумага для самокрутки
            и машинки для забивки. Мы предлагаем своим клиентам широкий выбор
            продукции, начиная от табака в нарезки до листового. В нашем
            каталоге вы можете сделать заказ Индийского табака. Мы продаем табак
            из местных брендов которые зарекомендовали себя на рынке как лучшие
            производители табака. При курении нашего табака вас будет наполнять
            вкус настоящей Индии, листовой табак не будет вызывать першение в
            горле или кашель.
            <br />
            <br />
            Почему у нас самые низкие цены на табак в России — ответ очень
            прост, мы реализуем продукцию не посредственно от производителя и не
            привлекаем никаких третьих лиц, не делаем дикие наценки которые
            пугали вас, купить табак у нас, это купить качество по лучшей цене.
            Мы постарались приятно удивить Вас списком того ассортимента который
            имеется у нас на сайте, для оформления заказа вам не придется долго
            разбираться у нас на сайте. Достаточно добавить понравившийся вам
            табак в корзину, заполнить информацию о доставке. Если вам будет
            удобней вы можете оформить заказ для самовывоза.
          </Text>
        </div>

        {/* <div className={styles.img}>
          <img src="/pre.jpg" alt="img" />
        </div> */}
      </div>
    </motion.div>
  );
};
