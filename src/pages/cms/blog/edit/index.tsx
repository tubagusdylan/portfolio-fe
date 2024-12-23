import FormBlog from "@components/cms/FormBlog";
import Template from "@layouts/cms/Template";
import { useUpdateBlogMutation, useGetBlogQuery } from "@services/blogs/api";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ConfirmationModal from "@components/cms/Modal";

const EditBlogPage = () => {
  const [updateBlog] = useUpdateBlogMutation();
  const { id } = useParams();
  const { data, isSuccess } = useGetBlogQuery(id as string);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newData, setNewData] = useState({
    writer_id: "",
    title: "",
    body: "",
    category: "",
    tags: "",
  });

  const onSubmitUpdatedData = async () => {
    const data = {
      ...newData,
      id: id,
    };
    const response = await updateBlog(data);
    if (response.data?.success) {
      toast.success(response.data.message);
      setIsOpenModal(false);
      setTimeout(() => {
        window.location.href = `${window.location.origin}/cms/blogs`;
      }, 1500);
      return;
    }
    return toast.error((response.error as any).data.message);
  };

  const updateBlogHandler = (data: any) => {
    setIsOpenModal(true);
    setNewData(data);
  };

  return (
    <Template>
      <h1 className="text-2xl font-bold text-blue">Edit Blog</h1>
      <FormBlog action="edit" onSubmit={updateBlogHandler} dataEdit={data?.data} isSuccessGetData={isSuccess} />
      <ConfirmationModal
        isOpen={isOpenModal}
        types="update"
        onRequestClose={() => setIsOpenModal(false)}
        title="Update Blog"
        onSubmitData={onSubmitUpdatedData}>
        Anda yakin ingin mengubah data blog ini?
      </ConfirmationModal>
    </Template>
  );
};

export default EditBlogPage;
