import Button from "@components/cms/Button";
import Table from "@components/cms/TableBase/Table";
import PATH from "@config/path";
import Template from "@layouts/cms/Template";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "@services/users/api";
import { USER_TABLE_HEADER } from "@static/tableHeader";
import { Users } from "@services/users/types";

const ManageUserPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetUsersQuery();

  return (
    <Template>
      <h1 className="text-2xl font-bold text-blue">Daftar User</h1>
      <div className="flex justify-end">
        <Button type="add" size="md" onClick={() => navigate(PATH.ADD_USERS_PAGE)}>
          Tambah User
        </Button>
      </div>
      <div className="my-4">
        <Table
          theaders={USER_TABLE_HEADER}
          tbodies={data?.data as Users[]}
          canEdit={true}
          canDelete={true}
          isLoading={isLoading}
          isError={isError}
          editHandler={() => navigate(PATH.EDIT_USERS_PAGE)}
        />
      </div>
    </Template>
  );
};

export default ManageUserPage;
