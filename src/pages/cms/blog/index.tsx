import Template from "@layouts/cms/Template";
import Table from "@components/cms/TableBase/Table";
import Button from "@components/cms/Button";
import PATH from "@config/path";
import ConfirmationModal from "@components/cms/Modal";
import { useGetBlogsQuery, useDeleteBlogMutation } from "@services/blogs/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { Blogs } from "@services/blogs/types";
import { BLOG_TABLE_HEADER } from "@static/tableHeader";
import Pagination from "@components/cms/Pagination";

const ManageBlogPage = () => {
  const [id, setId] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [paramBlog, setParamBlog] = useState({
    page: 1,
    limit: 10,
    category: "",
    title: "",
  });
  const { data, isLoading, isError } = useGetBlogsQuery({
    page: paramBlog.page,
    limit: paramBlog.limit,
    category: paramBlog.category,
    title: paramBlog.title,
  });
  const [deleteBlog] = useDeleteBlogMutation();
  const navigate = useNavigate();
  const pageCount = data?.meta.total_pages;

  const onSubmitDeletedData = async () => {
    const response = await deleteBlog(id);
    if (response.data?.success) {
      toast.success(response.data.message);
      setIsOpenModal(false);
      return;
    }
    return toast.error((response.error as any).data.message);
  };

  const deleteDataHandler = (id: string) => {
    setIsOpenModal(true);
    setId(id);
  };

  const onPageChange = (event: any) => {
    const newPage = event.selected + 1;

    setParamBlog((prev) => {
      return {
        ...prev,
        page: newPage,
      };
    });
  };

  return (
    <Template>
      <h1 className="text-2xl font-bold text-blue">Daftar Blog</h1>
      <div className="flex justify-end">
        <Button variant="primary" type="add" size="md" onClick={() => navigate(PATH.ADD_BLOGS_PAGE)}>
          Tambah Blog
        </Button>
      </div>
      <div className="my-4">
        <Table<Blogs>
          theaders={BLOG_TABLE_HEADER}
          tbodies={data?.data as Blogs[]}
          pathEdit={PATH.EDIT_BLOGS_PAGE}
          isLoading={isLoading}
          isError={isError}
          canDelete={true}
          canEdit={true}
          page={paramBlog.page}
          size={paramBlog.limit}
          deleteHandler={deleteDataHandler}
        />
        <div className="my-6">
          <Pagination pageCount={pageCount as number} onPageChange={onPageChange} />
        </div>
      </div>
      <ConfirmationModal
        types="delete"
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        title="Delete Blog"
        onDeleteData={onSubmitDeletedData}>
        Anda yakin ingin menghapus blog ini?
      </ConfirmationModal>
    </Template>
  );
};

export default ManageBlogPage;
