import FormUser from "@components/cms/FormUser";
import Template from "@layouts/cms/Template";
import { useAddUserMutation } from "@services/users/api";
import { toast } from "react-toastify";

const AddUserPage = () => {
  const [addUser] = useAddUserMutation();

  const addUserHandler = async (data: any) => {
    const response = await addUser(data);
    if (response.data?.success) {
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.href = `${window.location.origin}/cms/users`;
      }, 1500);
      return;
    }
    return toast.error((response.error as any).data.message);
  };

  return (
    <Template>
      <h1 className="text-2xl font-bold text-blue">Tambah User</h1>
      <FormUser action="add" onSubmit={addUserHandler} />
    </Template>
  );
};

export default AddUserPage;
