import { useState, ChangeEvent } from "react";

type useSelect = [string, (event: ChangeEvent<HTMLSelectElement>) => void, (newValue: string) => void];

export const useSelect = (defaultValue: string = ""): useSelect => {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  const onSetValueHandler = (newValue: string) => {
    setValue(newValue);
  };

  return [value, onValueChangeHandler, onSetValueHandler];
};
