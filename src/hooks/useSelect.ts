import { useState, ChangeEvent } from "react";

type useSelect = [string, (event: ChangeEvent<HTMLSelectElement>) => void];

export const useSelect = (defaultValue: string = ""): useSelect => {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler];
};
