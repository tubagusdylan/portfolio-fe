import Button from "@components/cms/Button";
import { TableHeader } from "@static/tableHeader";
import { localeDate } from "@utils/localeDate";
import { parseJSON } from "@utils/parseJSON";
import { getTableNumber } from "@utils/tableNumber";
import { useNavigate } from "react-router-dom";
interface TableProps<T> {
  theaders: TableHeader<T>[];
  tbodies: T[];
  canEdit?: boolean;
  canDelete?: boolean;
  pathEdit: string;
  isLoading: boolean;
  isError: boolean;
  page: number;
  size: number;
  deleteHandler: (id: string) => void;
}

function Table<T>({ theaders, tbodies, canEdit, canDelete, pathEdit, deleteHandler, isLoading, isError, page, size }: TableProps<T>) {
  const navigate = useNavigate();
  return (
    <table className="table-auto w-full border border-collapse border-slate-500">
      <thead>
        <tr>
          <th className="border border-slate-500 text-left p-2 bg-slate-100 text-sm">No.</th>
          {theaders.map((item, index) => (
            <th key={index} className="border border-slate-500 text-left p-2 bg-slate-100 text-sm">
              {item.header}
            </th>
          ))}
          <th className="border border-slate-500 text-left p-2 bg-slate-100 text-sm">Action</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td className="text-center py-2" colSpan={theaders.length + 2}>
              Loading...
            </td>
          </tr>
        ) : isError || tbodies === undefined ? (
          <tr>
            <td className="text-center py-2" colSpan={theaders.length + 2}>
              Data not found
            </td>
          </tr>
        ) : (
          <>
            {tbodies.map((item, index) => (
              <tr key={index}>
                <td className="border border-slate-500 text-left p-2 text-sm">{getTableNumber(index, page, size)}</td>
                {theaders.map((header, headerIndex) => (
                  <td key={headerIndex} className="border border-slate-500 text-left p-2 text-sm">
                    {header.key === "created_at" || header.key === "updated_at" ? localeDate(String(item[header.key])) : String(item[header.key])}
                  </td>
                ))}
                <td className="border border-slate-500 text-left p-2">
                  <div className="flex gap-1">
                    {canEdit && (
                      <Button variant="primary" type="edit" size="sm" onClick={() => navigate(`${pathEdit}/${parseJSON(item).id}`)}>
                        Edit
                      </Button>
                    )}
                    {canDelete && (
                      <Button variant="primary" type="delete" size="sm" onClick={() => deleteHandler(parseJSON(item).id)}>
                        Delete
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
}

export default Table;
