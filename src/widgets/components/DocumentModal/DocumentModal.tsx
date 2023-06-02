import { FC, useEffect } from "react";
import { Modal, Slider } from "../../../entities";
import { useDocument } from "../../store/document.store";
import styles from "./DocumentModal.module.scss";
import { IoMdCloseCircle } from "react-icons/io";

export const DocumentModal: FC = (): JSX.Element => {
  const { isActive, setIsActive } = useDocument();

  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

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
