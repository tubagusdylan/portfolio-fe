import Table from "@components/cms/TableBase/Table";
import Template from "@layouts/cms/Template";
import { useGetTestimoniesQuery, useDeleteTestimonieMutation } from "@services/testimonies/api";
import { TESTI_TABLE_HEADER } from "@static/tableHeader";
import { Testimonies } from "@services/testimonies/types";
import { toast } from "react-toastify";
import { useState } from "react";
import ConfirmationModal from "@components/cms/Modal";
import Pagination from "@components/cms/Pagination";
import PATH from "@config/path";

const ManageTestimoniePage = () => {
  const [id, setId] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [paramTesti, setParamTesti] = useState({
    page: 1,
    limit: 10,
  });
  const { data, isLoading, isError } = useGetTestimoniesQuery({
    page: paramTesti.page,
    limit: paramTesti.limit,
  });
  const [deleteTesti] = useDeleteTestimonieMutation();
  const pageCount = data?.meta.total_pages;

  const onSubmitDeletedData = async () => {
    const response = await deleteTesti(id);
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

  const onPageChange = (event: any) => {
    const newPage = event.selected + 1;
    setParamTesti((prev) => {
      return {
        ...prev,
        page: newPage,
      };
    });
  };

  return (
    <Template>
      <h1 className="text-2xl font-bold text-blue">Daftar Testimonie</h1>
      <div className="flex justify-end mt-6">
        <a href={`${window.location.origin}${PATH.TESTI_FORM_PAGE}`} target="_blank" className="font-bold text-orange underline">
          Link Form Testimonie
        </a>
      </div>
      <div className="my-4">
        <Table<Testimonies>
          theaders={TESTI_TABLE_HEADER}
          tbodies={data?.data as Testimonies[]}
          canEdit={false}
          canDelete={true}
          isLoading={isLoading}
          isError={isError}
          pathEdit=""
          page={paramTesti.page}
          size={paramTesti.limit}
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
        title="Delete Testimonie"
        onDeleteData={onSubmitDeletedData}>
        Anda yakin ingin menghapus testimonie ini?
      </ConfirmationModal>
    </Template>
  );
};

export default ManageTestimoniePage;
