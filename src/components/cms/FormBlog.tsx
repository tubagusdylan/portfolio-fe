import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { CATEGORIES, TAGS } from "@static/blogConstant";
import { useAppSelector } from "@services/hooks";
import { useInputText } from "@hooks/useInputText";
import { useNavigate } from "react-router-dom";
import { useSelect } from "@hooks/useSelect";
import { Blogs } from "@services/blogs/types";
import Button from "./Button";
import PATH from "@config/path";
import Multiselect from "./Multiselect";
import TextEditor from "./TextEditor";
import { stringToSelect, selectToString } from "@utils/multiSelectMap";

interface FormBlogProps {
  action?: "add" | "edit";
  dataEdit?: Blogs;
  isSuccessGetData?: boolean;
  onSubmit: (data: any) => void;
}

const FormBlog: FC<FormBlogProps> = ({ action, dataEdit, isSuccessGetData, onSubmit }) => {
  const [title, onChangeTitle, onSetTitle] = useInputText("");
  const [category, onChangeCategory, onSetCategory] = useSelect("");
  const [tagsSelected, setTagsSelected] = useState<string[]>([]);
  const [bodies, setBodies] = useState("");
  const writer_id = useAppSelector((state) => state.auth.id);
  const navigate = useNavigate();

  const onAddItemSelected = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = tagsSelected.findIndex((item) => item === e.target.value);
    if (index !== -1) {
      return;
    }
    setTagsSelected((prev) => [...prev, e.target.value]);
  };

  const onRemoveItemSelected = (value: string) => {
    const index = tagsSelected.findIndex((item) => item === value);

    const newSelected = [...tagsSelected];
    newSelected.splice(index, 1);
    setTagsSelected(newSelected);
  };

  const onChangeBodies = (content: string) => {
    setBodies(content);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      writer_id: writer_id,
      title: title,
      body: bodies,
      category: category,
      tags: selectToString(tagsSelected),
    };
    onSubmit(data);
    onSetTitle("");
    onSetCategory("");
    setTagsSelected([]);
    setBodies("");
  };

  useEffect(() => {
    if (action === "edit" && isSuccessGetData) {
      onSetTitle(dataEdit?.title as string);
      onSetCategory(dataEdit?.category as string);
      setTagsSelected(stringToSelect(dataEdit?.tags as string));
      setBodies(dataEdit?.body as string);
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
        <label htmlFor="category" className="mb-2 block">
          Category
        </label>
        <select
          id="category"
          className="w-full border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
          value={category}
          onChange={onChangeCategory}>
          <option value="" disabled>
            Pilih Kategori
          </option>
          {CATEGORIES.map((item, index) => (
            <option value={item.value} key={index}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-1/2 mt-6">
        <Multiselect
          label="Tags"
          itemSelected={tagsSelected}
          listOptions={TAGS}
          onAddItemSelected={onAddItemSelected}
          onRemoveItemSelected={onRemoveItemSelected}
        />
      </div>
      <div className="w-full mt-6">
        <TextEditor label="Body" value={bodies} onChange={onChangeBodies} height="400px" placeholder="Lorem ipsum dolar amet" />
      </div>
      <div className="w-1/2 my-6 flex gap-x-2">
        <Button variant="secondary" type="back" onClick={() => navigate(PATH.BLOGS_PAGE)}>
          Kembali
        </Button>
        <Button variant="primary" buttonType="submit">
          {action === "edit" ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default FormBlog;
