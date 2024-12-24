import Template from "@layouts/cms/Template";
import Table from "@components/cms/TableBase/Table";
import Button from "@components/cms/Button";
import PATH from "@config/path";
import ConfirmationModal from "@components/cms/Modal";
import { useGetMyProjectsQuery, useDeleteMyProjectMutation } from "@services/my-projects/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { MyProjects } from "@services/my-projects/types";
import { PROJECT_TABLE_HEADER } from "@static/tableHeader";
import Pagination from "@components/cms/Pagination";
import SearchProject from "@components/cms/searchProject";

const ManageProjectPage = () => {
  const [id, setId] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [paramProject, setParamProject] = useState({
    page: 1,
    limit: 10,
    title: "",
    tech_stack: "",
  });
  const { data, isLoading, isError } = useGetMyProjectsQuery({
    page: paramProject.page,
    limit: paramProject.limit,
    title: paramProject.title,
    tech_stack: paramProject.tech_stack,
  });
  const [deleteProject] = useDeleteMyProjectMutation();
  const navigate = useNavigate();
  const pageCount = data?.meta.total_pages;

  const onSubmitDeletedData = async () => {
    const response = await deleteProject(id);
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

  const onSearchProject = (item: any) => {
    setParamProject((prev) => {
      return {
        ...prev,
        title: item.title,
        tech_stack: item.techStack,
      };
    });
  };

  const onResetSearchProject = () => {
    setParamProject((prev) => {
      return {
        ...prev,
        title: "",
        tech_stack: "",
      };
    });
  };

  const onPageChange = (event: any) => {
    const newPage = event.selected + 1;
    setParamProject((prev) => {
      return {
        ...prev,
        page: newPage,
      };
    });
  };

  return (
    <Template>
      <h1 className="text-2xl font-bold text-blue">Daftar Project</h1>
      <div className="flex justify-between items-center mt-6">
        <SearchProject onSearch={onSearchProject} onResetSearch={onResetSearchProject} />
        <Button variant="primary" type="add" size="md" onClick={() => navigate(PATH.ADD_PROJECTS_PAGE)}>
          Tambah Project
        </Button>
      </div>
      <div className="my-4">
        <Table<MyProjects>
          theaders={PROJECT_TABLE_HEADER}
          tbodies={data?.data as MyProjects[]}
          pathEdit={PATH.EDIT_PROJECTS_PAGE}
          isLoading={isLoading}
          isError={isError}
          canDelete={true}
          canEdit={true}
          page={paramProject.page}
          size={paramProject.limit}
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
        title="Delete Project"
        onDeleteData={onSubmitDeletedData}>
        Anda yakin ingin menghapus project ini?
      </ConfirmationModal>
    </Template>
  );
};

export default ManageProjectPage;
