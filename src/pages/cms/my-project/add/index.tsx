import FormProject from "@components/cms/FormProject";
import Template from "@layouts/cms/Template";
import { useAddMyProjectMutation } from "@services/my-projects/api";
import { toast } from "react-toastify";

const AddProjectPage = () => {
  const [addProject] = useAddMyProjectMutation();

  const addProjectHandler = async (data: any) => {
    const response = await addProject(data);
    if (response.data?.success) {
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.href = `${window.location.origin}/cms/my-projects`;
      }, 1500);
      return;
    }
    return toast.error((response.error as any).data.message);
  };

  return (
    <Template>
      <h1 className="text-2xl font-bold text-blue">Tambah Project</h1>
      <FormProject action="add" onSubmit={addProjectHandler} />
    </Template>
  );
};

export default AddProjectPage;
