import { ChangeEvent, FC } from "react";
import { RxCross2 } from "react-icons/rx";

interface ListOptions {
  name: string;
  value: string;
}

interface MultiselectProps {
  itemSelected: string[];
  listOptions: ListOptions[];
  label: string;
  onAddItemSelected: (e: ChangeEvent<HTMLSelectElement>) => void;
  onRemoveItemSelected: (item: string) => void;
}

const Multiselect: FC<MultiselectProps> = ({ itemSelected, listOptions, label, onAddItemSelected, onRemoveItemSelected }) => {
  return (
    <>
      <label htmlFor="multiSelect" className="mb-2 block">
        {label}
      </label>
      <div className="flex gap-1 mb-2">
        {itemSelected.map((item, index) => (
          <div key={index} className="flex items-center px-2 rounded-2xl gap-x-2 border-2 border-orange bg-opacity-50 text-orange">
            <div>{item}</div>
            <div onClick={() => onRemoveItemSelected(item)}>
              <RxCross2 size={14} className="cursor-pointer hover:text-dark-orange" />
            </div>
          </div>
        ))}
      </div>
      <select
        id="multiSelect"
        className="w-full border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
        onChange={onAddItemSelected}
        defaultValue={""}>
        <option value="" disabled>
          Pilih {label}
        </option>
        {listOptions.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Multiselect;
