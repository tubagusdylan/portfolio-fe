import Button from "@components/cms/Button";
import Table from "@components/cms/TableBase/Table";
import PATH from "@config/path";
import Template from "@layouts/cms/Template";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery, useDeleteUserMutation } from "@services/users/api";
import { USER_TABLE_HEADER } from "@static/tableHeader";
import { Users } from "@services/users/types";
import { toast } from "react-toastify";
import { useState } from "react";
import ConfirmationModal from "@components/cms/Modal";

const ManageUserPage = () => {
  const [id, setId] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const onSubmitDeletedData = async () => {
    const response = await deleteUser(id);
    if (response.data?.success) {
      toast.success(response.data.message);
      setIsOpenModal(false);
      return;
    }
    return toast.error((response.error as any).data.message);
  };

  const deleteDataHandler = async (id: string) => {
    setIsOpenModal(true);
    setId(id);
  };

  return (
    <Template>
      <h1 className="text-2xl font-bold text-blue">Daftar User</h1>
      <div className="flex justify-end">
        <Button variant="primary" type="add" size="md" onClick={() => navigate(PATH.ADD_USERS_PAGE)}>
          Tambah User
        </Button>
      </div>
      <div className="my-4">
        <Table<Users>
          theaders={USER_TABLE_HEADER}
          tbodies={data?.data as Users[]}
          canEdit={true}
          canDelete={true}
          pathEdit={PATH.EDIT_USERS_PAGE}
          isLoading={isLoading}
          isError={isError}
          deleteHandler={deleteDataHandler}
        />
      </div>
      <ConfirmationModal
        types="delete"
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        title="Delete User"
        onDeleteData={onSubmitDeletedData}>
        Anda yakin ingin menghapus user ini?
      </ConfirmationModal>
    </Template>
  );
};

export default ManageUserPage;
