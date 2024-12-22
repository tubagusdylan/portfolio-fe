import { useInputText } from "@hooks/useInputText";
import { useSelect } from "@hooks/useSelect";
import { Users } from "@services/users/types";
import { FC, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import PATH from "@config/path";

interface FormUserProps {
  action?: "add" | "edit";
  dataEdit?: Users;
  onSubmit: (data: any) => void;
}

const FormUser: FC<FormUserProps> = ({ action, dataEdit, onSubmit }) => {
  const [username, onChangeUsername] = useInputText("");
  const [password, onChangePassword] = useInputText("");
  const [profileName, onChangeProfileName] = useInputText("");
  const [role, onChangeRole] = useSelect("");
  const navigate = useNavigate();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
      profileName: profileName,
      isAdmin: role,
    };

    onSubmit(data);
  };

  return (
    <>
      <form className="w-full" onSubmit={onSubmitHandler}>
        <div className="w-1/2 mt-6">
          <label htmlFor="username" className="mb-2 block">
            Username
          </label>
          <input
            type="text"
            className="w-full border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
            placeholder="johndoe"
            value={action === "edit" ? dataEdit?.username : username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="w-1/2 mt-6">
          <label htmlFor="password" className="mb-2 block">
            {action === "edit" ? "New Password" : "Password"}
          </label>
          <input
            type="password"
            className="w-full border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
            placeholder="*****"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div className="w-1/2 mt-6">
          <label htmlFor="profile" className="mb-2 block">
            Profile Name
          </label>
          <input
            type="text"
            className="w-full border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
            placeholder="John Doe"
            value={action === "edit" ? dataEdit?.profile_name : profileName}
            onChange={onChangeProfileName}
          />
        </div>
        <div className="w-1/2 mt-6">
          <label htmlFor="admin" className="mb-2 block">
            Role Admin
          </label>
          <select
            id="admin"
            className="w-full border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-orange"
            onChange={onChangeRole}
            value={action === "edit" ? `${dataEdit?.is_admin}` : role}>
            <option value="" disabled>
              Pilih role
            </option>
            <option value="1">Ya</option>
            <option value="0">Tidak</option>
          </select>
        </div>
        <div className="w-1/2 mt-6 flex gap-x-2">
          <Button variant="secondary" type="back" onClick={() => navigate(PATH.USERS_PAGE)}>
            Kembali
          </Button>
          <Button variant="primary" buttonType="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormUser;
