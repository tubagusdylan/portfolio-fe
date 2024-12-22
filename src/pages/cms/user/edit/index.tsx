import FormUser from "@components/cms/FormUser";
import Template from "@layouts/cms/Template";
import ConfirmationModal from "@components/cms/Modal";
import { useUpdateUserMutation, useGetUserQuery } from "@services/users/api";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useState } from "react";

const EditUserPage = () => {
  const [updateUser] = useUpdateUserMutation();
  const { id } = useParams();
  const { data, isSuccess } = useGetUserQuery(id as string);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newData, setNewData] = useState({
    username: "",
    password: "",
    profileName: "",
    isAdmin: 0,
  });

  const onSubmitUpdatedData = async () => {
    const data = {
      ...newData,
      id: id,
    };
    const response = await updateUser(data);
    if (response.data?.success) {
      toast.success(response.data.message);
      setIsOpenModal(false);
      setTimeout(() => {
        window.location.href = `${window.location.origin}/cms/users`;
      }, 1500);
      return;
    }
    return toast.error((response.error as any).data.message);
  };

  const updateUserHandler = async (data: any) => {
    setIsOpenModal(true);
    setNewData(data);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Template>
      <h1 className="text-2xl font-bold text-blue">Edit User</h1>
      <FormUser action="edit" onSubmit={updateUserHandler} dataEdit={data?.data} isSuccessGetData={isSuccess} />
      <ConfirmationModal isOpen={isOpenModal} types="update" onRequestClose={onCloseModal} title="Update User" onSubmitData={onSubmitUpdatedData}>
        Anda yakin ingin mengubah data user ini?
      </ConfirmationModal>
    </Template>
  );
};

export default EditUserPage;
