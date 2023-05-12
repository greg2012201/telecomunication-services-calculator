import styles from "./SelectField.module.css";

type Value = string | number;

export type Option = {
  label: string;
  value: Value;
};

type Props = {
  options: Option[];
  label: string;
  name: string;
  id?: string;
  defaultOptionLabel?: Option["label"];
  handleChange(option: string): void;
};

function SelectField({
  options,
  label,
  name,
  id,
  handleChange,
  defaultOptionLabel,
}: Props): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <select
        id={id || name}
        name={name}
        onChange={(e) => {
          const targetValue = e.target.value;
          return handleChange(targetValue);
        }}
      >
        {options.map((option: Option) => {
          return (
            <option
              key={id ? `${id}-${option.label}` : option.label}
              value={option.value}
              defaultValue={defaultOptionLabel}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectField;
