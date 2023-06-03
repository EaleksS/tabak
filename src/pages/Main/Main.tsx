import { FC } from "react";
import {
  About,
  Contacts,
  Documents,
  HowToUse,
  Layout,
  Preview,
  Products,
  Advantages,
} from "../../widgets";
// import styles from "./Main.module.scss";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <Preview />
      <Advantages />
      <Products />
      <HowToUse />
      <About />
      <Documents />
      <Contacts />
    </Layout>
  );
};
