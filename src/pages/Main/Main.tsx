import { FC } from "react";
import {
  About,
  Contacts,
  Documents,
  Layout,
  Preview,
  Products,
} from "../../widgets";
// import styles from "./Main.module.scss";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <Preview />
      <Products />
      <About />
      <Documents />
      <Contacts />
    </Layout>
  );
};
