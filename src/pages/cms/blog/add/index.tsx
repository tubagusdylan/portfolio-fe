import FormBlog from "@components/cms/FormBlog";
import Template from "@layouts/cms/Template";
import { useAddBlogMutation } from "@services/blogs/api";
import { toast } from "react-toastify";

const AddBlogPage = () => {
  const [addBlog] = useAddBlogMutation();

  const addBlogHandler = async (data: any) => {
    const response = await addBlog(data);
    if (response.data?.success) {
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.href = `${window.location.origin}/cms/blogs`;
      }, 1500);
      return;
    }
    return toast.error((response.error as any).data.message);
  };
  return (
    <Template>
      <h1 className="text-2xl font-bold text-blue">Tambah Blog</h1>
      <FormBlog action="add" onSubmit={addBlogHandler} />
    </Template>
  );
};

export default AddBlogPage;
