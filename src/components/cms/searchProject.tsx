import { useInputText } from "@hooks/useInputText";
import { useSelect } from "@hooks/useSelect";
import { FC } from "react";
import Button from "./Button";
import { TECH_STACK } from "@static/projectConstant";

interface SearchProjectProps {
  onSearch: (data: any) => void;
  onResetSearch: () => void;
}

const SearchProject: FC<SearchProjectProps> = ({ onSearch, onResetSearch }) => {
  const [title, onChangeTitle, onSetTitle] = useInputText("");
  const [techStack, onChangeTechStack, onSetTechStack] = useSelect("");

  const onResetProject = () => {
    onSetTechStack("");
    onSetTitle("");
    onResetSearch();
  };

  return (
    <div className="flex gap-x-4">
      <div>
        <input
          type="text"
          className="border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
          placeholder="Cari Judul Project"
          value={title}
          onChange={onChangeTitle}
        />
      </div>
      <div>
        <select
          className="border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
          value={techStack}
          onChange={onChangeTechStack}>
          <option value="" disabled>
            Cari Tech Stack
          </option>
          {TECH_STACK.map((item, index) => (
            <option value={item.value} key={index}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Button variant="secondary" size="md" onClick={onResetProject}>
          Reset
        </Button>
      </div>
      <div>
        <Button variant="outline" size="md" onClick={() => onSearch({ title, techStack })}>
          Cari
        </Button>
      </div>
    </div>
  );
};

export default SearchProject;
