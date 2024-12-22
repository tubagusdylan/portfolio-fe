import Button from "@components/cms/Button";
import { TableHeader } from "@static/tableHeader";
import { useNavigate } from "react-router-dom";

interface TableProps<T> {
  theaders: TableHeader<T>[];
  tbodies: T[];
  canEdit?: boolean;
  canDelete?: boolean;
  pathEdit: string;
  isLoading: boolean;
  isError: boolean;
  deleteHandler: (id: string) => void;
}

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

function Table<T>({ theaders, tbodies, canEdit, canDelete, pathEdit, deleteHandler, isLoading, isError }: TableProps<T>) {
  const navigate = useNavigate();
  return (
    <table className="table-auto w-full border border-collapse border-slate-500">
      <thead>
        <tr>
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
            <td className="text-center py-2" colSpan={6}>
              Loading...
            </td>
          </tr>
        ) : isError ? (
          <tr>
            <td className="text-center py-2" colSpan={6}>
              Data not found
            </td>
          </tr>
        ) : (
          <>
            {tbodies.map((item, index) => (
              <tr key={index}>
                {theaders.map((header, headerIndex) => (
                  <td key={headerIndex} className="border border-slate-500 text-left p-2 text-sm">
                    {header.key === "created_at" ? new Date(String(item[header.key])).toLocaleDateString("id-ID", options) : String(item[header.key])}
                  </td>
                ))}
                <td className="border border-slate-500 text-left p-2">
                  <div className="flex gap-1">
                    {canEdit && (
                      <Button variant="primary" type="edit" size="sm" onClick={() => navigate(`${pathEdit}/${JSON.parse(JSON.stringify(item)).id}`)}>
                        Edit
                      </Button>
                    )}
                    {canDelete && (
                      <Button variant="primary" type="delete" size="sm" onClick={() => deleteHandler(JSON.parse(JSON.stringify(item)).id)}>
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
