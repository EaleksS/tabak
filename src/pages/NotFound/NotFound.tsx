import { FC } from "react";
import { Layout } from "../../widgets";
import styles from "./NotFound.module.scss";
import { Text } from "../../shared";

export const NotFound: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.not_found}>
        <Text type="h1">
          404
        </Text>
        <Text type="h2">Страница не найдена</Text>
        <Text type="p3">
          Извините, но страницу, которую Вы пытаетесь найти - не существует.
          Предлагаем Вам перейти на Главную страницу
        </Text>
      </div>
    </Layout>
  );
};
