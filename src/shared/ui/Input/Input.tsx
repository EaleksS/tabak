import { Dispatch, FC } from "react";
import styles from "./Input.module.scss";
import InputMask from "react-input-mask";

interface Props {
  type?: "email" | "text" | "tel" | "textarea";
  placholder?: string;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
}

export const Input: FC<Props> = ({
  type = "text",
  placholder,
  value,
  setValue,
}): JSX.Element => {
  switch (type) {
    case "email":
      return (
        <label className={styles.label}>
          <div>
            <input
              type="email"
              placeholder={
                placholder ? placholder : "Введите тел.номер или эл.почту"
              }
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </label>
      );

    case "tel":
      return (
        <label className={styles.label}>
          <div>
            <InputMask
              mask="+7 (999) 999-99-99"
              name="message"
              placeholder={placholder ? placholder : "Введите тел.номер"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></InputMask>
          </div>
        </label>
      );

    case "textarea":
      return (
        <label className={styles.label}>
          <div>
            <textarea
              placeholder={placholder ? placholder : "Введите тел.номер"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </label>
      );

    default:
      return (
        <label className={`${styles.label}`}>
          <div>
            <input
              type="text"
              placeholder={placholder ? placholder : "Текст"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </label>
      );
  }
};
