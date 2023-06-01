import { FC } from "react";
import styles from "./ContactLeft.module.scss";
import { Text } from "../../../shared";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaVk, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ContactLeft: FC = (): JSX.Element => {
  return (
    <div className={styles.contact_right}>
      <Text type="p2" color="#fff">
        контактная информация
      </Text>
      <div className={styles.line}></div>

      <Link to=".#">
        <FiInstagram className={styles.icon} />
      </Link>
      <Link to=".#">
        <FaFacebookF className={styles.icon} />
      </Link>
      <Link to=".#">
        <FaVk className={styles.icon} />
      </Link>
      <Link to=".#" style={{ marginBottom: "80px" }}>
        <FaYoutube className={styles.icon} />
      </Link>
    </div>
  );
};
