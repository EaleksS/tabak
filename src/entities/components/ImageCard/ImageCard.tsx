import { FC } from "react";
import styles from "./ImageCard.module.scss";
import { FcSearch } from "react-icons/fc";

interface Props {
  url: string;
}

export const ImageCard: FC<Props> = ({ url }): JSX.Element => {
  return (
    <div className={styles.image}>
      <img src={url} alt="img" />
      <div className={styles.loop}>
        <FcSearch className={styles.icon} />
      </div>
    </div>
  );
};
