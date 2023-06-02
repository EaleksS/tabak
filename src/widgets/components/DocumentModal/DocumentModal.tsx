import { FC } from "react";
import { Modal, Slider } from "../../../entities";
import { useDocument } from "../../store/document.store";
import styles from "./DocumentModal.module.scss";
import { IoMdCloseCircle } from "react-icons/io";

export const DocumentModal: FC = (): JSX.Element => {
  const { isActive, setIsActive } = useDocument();

  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <div className={styles.document}>
        <Slider type="documentsM" />
        <div className={styles.close} onClick={() => setIsActive(false)}>
          <IoMdCloseCircle />
        </div>
      </div>
    </Modal>
  );
};
