import { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Up } from "../../../entities";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { ContactsForm } from "../ContactsForm/ContactsForm";
import { DocumentModal } from "../DocumentModal/DocumentModal";
import { Confirmation } from "../Confirmation/Confirmation";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className={styles.wrapper} id="wrapper">
      <BurgerMenu />
      <ContactsForm />
      <DocumentModal />
      <Confirmation />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <Up />
    </div>
  );
};
