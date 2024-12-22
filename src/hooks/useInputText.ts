import { useState, ChangeEvent } from "react";

type useInput = [string, (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void, (newValue: string) => void];

export const useInputText = (defaultValue: string = ""): useInput => {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const onSetValueHandler = (newValue: string) => {
    setValue(newValue);
  };

  return [value, onValueChangeHandler, onSetValueHandler];
};
