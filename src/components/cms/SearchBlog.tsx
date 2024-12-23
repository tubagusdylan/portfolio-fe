import { useInputText } from "@hooks/useInputText";
import Button from "./Button";
import { FC } from "react";

interface SearchBlogProps {
  onSearch: (data: any) => void;
  onResetSearch: () => void;
}

const SearchBlog: FC<SearchBlogProps> = ({ onSearch, onResetSearch }) => {
  const [title, onChangeTitle, onSetTitle] = useInputText("");
  const [category, onChangeCategory, onSetCategory] = useInputText("");

  const onResetBlog = () => {
    onSetTitle("");
    onSetCategory("");
    onResetSearch();
  };

  return (
    <div className="flex gap-x-2">
      <div>
        <input
          type="text"
          className="border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
          placeholder="Cari Judul"
          value={title}
          onChange={onChangeTitle}
        />
      </div>
      <div>
        <input
          type="text"
          className="border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
          placeholder="Cari Kategori"
          value={category}
          onChange={onChangeCategory}
        />
      </div>
      <div>
        <Button variant="secondary" size="md" onClick={onResetBlog}>
          Reset
        </Button>
      </div>
      <div>
        <Button variant="outline" size="md" onClick={() => onSearch({ title, category })}>
          Cari
        </Button>
      </div>
    </div>
  );
};

export default SearchBlog;
