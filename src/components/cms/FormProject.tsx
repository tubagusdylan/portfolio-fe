import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useAppSelector } from "@services/hooks";
import { useInputText } from "@hooks/useInputText";
import { useNavigate } from "react-router-dom";
import { useSelect } from "@hooks/useSelect";
import { MyProjects } from "@services/my-projects/types";
import { TECH_STACK } from "@static/projectConstant";
import Button from "./Button";
import PATH from "@config/path";
import Multiselect from "./Multiselect";
import { stringToSelect, selectToString } from "@utils/multiSelectMap";

interface FormProjectProps {
  action?: "add" | "edit";
  dataEdit?: MyProjects;
  isSuccessGetData?: boolean;
  onSubmit: (data: any) => void;
}

const FormProject: FC<FormProjectProps> = ({ action, dataEdit, isSuccessGetData, onSubmit }) => {
  const [title, onChangeTitle, onSetTitle] = useInputText("");
  const [techStackSelected, setTechStackSelected] = useState<string[]>([]);
  const [gitUrl, onChangeGitUrl, onSetGitUrl] = useInputText("");
  const [webUrl, onChangeWebUrl, onSetWebUrl] = useInputText("");
  const user_id = useAppSelector((state) => state.auth.id);
  const navigate = useNavigate();

  const onAddItemSelected = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = techStackSelected.findIndex((item) => item === e.target.value);
    if (index !== -1) {
      return;
    }
    setTechStackSelected((prev) => [...prev, e.target.value]);
  };

  const onRemoveItemSelected = (value: string) => {
    const index = techStackSelected.findIndex((item) => item === value);

    const newSelected = [...techStackSelected];
    newSelected.splice(index, 1);
    setTechStackSelected(newSelected);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      user_id: user_id,
      title: title,
      tech_stack: selectToString(techStackSelected),
      github_url: gitUrl,
      web_url: webUrl,
    };
    onSubmit(data);
    onSetTitle("");
    onSetGitUrl("");
    onSetWebUrl("");
    setTechStackSelected([]);
  };

  useEffect(() => {
    if (action === "edit" && isSuccessGetData) {
      onSetTitle(dataEdit?.title as string);
      onSetGitUrl(dataEdit?.github_url as string);
      onSetWebUrl(dataEdit?.web_url as string);
      setTechStackSelected(stringToSelect(dataEdit?.tech_stack as string));
    }
  }, [isSuccessGetData]);

  return (
    <form className="w-full" onSubmit={onSubmitHandler}>
      <div className="w-1/2 mt-6">
        <label htmlFor="title" className="mb-2 block">
          Title
        </label>
        <input
          type="text"
          className="w-full border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
          placeholder="Cerita Hari Ini"
          value={title}
          onChange={onChangeTitle}
        />
      </div>
      <div className="w-1/2 mt-6">
        <Multiselect
          label="Tech Stack"
          itemSelected={techStackSelected}
          listOptions={TECH_STACK}
          onAddItemSelected={onAddItemSelected}
          onRemoveItemSelected={onRemoveItemSelected}
        />
      </div>
      <div className="w-1/2 mt-6">
        <label htmlFor="git" className="mb-2 block">
          Git URL
        </label>
        <input
          type="text"
          className="w-full border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
          placeholder="https://github.com"
          value={gitUrl}
          onChange={onChangeGitUrl}
        />
      </div>
      <div className="w-1/2 mt-6">
        <label htmlFor="web" className="mb-2 block">
          Web URL
        </label>
        <input
          type="text"
          className="w-full border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
          placeholder="https://contoh.com"
          value={webUrl}
          onChange={onChangeWebUrl}
        />
      </div>
      <div className="w-1/2 my-6 flex gap-x-2">
        <Button variant="secondary" type="back" onClick={() => navigate(PATH.PROJECTS_PAGE)}>
          Kembali
        </Button>
        <Button variant="primary" buttonType="submit">
          {action === "edit" ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default FormProject;
