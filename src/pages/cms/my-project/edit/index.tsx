import FormProject from "@components/cms/FormProject";
import Template from "@layouts/cms/Template";
import { useUpdateMyProjectMutation, useGetMyProjectQuery } from "@services/my-projects/api";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ConfirmationModal from "@components/cms/Modal";

const EditProjectPage = () => {
  const [updateProject] = useUpdateMyProjectMutation();
  const { id } = useParams();
  const { data, isSuccess } = useGetMyProjectQuery(id as string);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newData, setNewData] = useState({
    user_id: "",
    title: "",
    tech_stack: "",
    github_url: "",
    web_url: "",
  });

  const onSubmitUpdatedData = async () => {
    const data = {
      ...newData,
      id: id,
    };
    const response = await updateProject(data);
    if (response.data?.success) {
      toast.success(response.data.message);
      setIsOpenModal(false);
      setTimeout(() => {
        window.location.href = `${window.location.origin}/cms/my-projects`;
      }, 1500);
      return;
    }
    return toast.error((response.error as any).data.message);
  };

  const updateProjectHandler = (data: any) => {
    setIsOpenModal(true);
    setNewData(data);
  };

  return (
    <Template>
      <h1 className="text-2xl font-bold text-blue">Edit Project</h1>
      <FormProject action="edit" onSubmit={updateProjectHandler} dataEdit={data?.data} isSuccessGetData={isSuccess} />
      <ConfirmationModal
        isOpen={isOpenModal}
        types="update"
        onRequestClose={() => setIsOpenModal(false)}
        title="Update Project"
        onSubmitData={onSubmitUpdatedData}>
        Anda yakin ingin mengubah data project ini?
      </ConfirmationModal>
    </Template>
  );
};

export default EditProjectPage;
