import Button from "@components/Button";
import { FormEvent, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useInputText } from "@hooks/useInputText";
import { useLoginMutation } from "@services/auth/api";
import { toast } from "react-toastify";

const LoginCms = () => {
  const [typePassword, setTypePassword] = useState("password");
  const [username, onChangeUsername] = useInputText("");
  const [password, onChangePassword] = useInputText("");
  const [login] = useLoginMutation();

  const onChangeTypePassword = () => {
    const type = typePassword === "password" ? "text" : "password";
    setTypePassword(type);
  };

  const onSubmitLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await login({ username, password });

    if (response.data?.success) {
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.href = `${window.location.origin}/cms/dashboard`;
      }, 1500);
      return;
    }

    return toast.error((response.error as any).data.message);
  };

  return (
    <div className="w-full h-[100vh] bg-slate-200 flex items-center justify-center">
      <div className="bg-white w-full mx-10 md:w-[400px] md:mx-0 p-5 rounded-lg shadow-lg">
        <header className="pb-3 mb-3">
          <h1 className="text-center font-bold text-2xl text-blue">Login</h1>
        </header>
        <form onSubmit={onSubmitLogin}>
          <div className="mb-5">
            <label htmlFor="username" className="text-orange text-sm">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={onChangeUsername}
              placeholder="Username"
              className="block w-full p-2 my-2 rounded-md border outline-none focus:ring-1 focus:ring-orange"
            />
          </div>
          <div className="relative mb-5">
            <label htmlFor="password" className="text-orange text-sm">
              Password
            </label>
            <input
              id="password"
              type={typePassword}
              value={password}
              onChange={onChangePassword}
              placeholder="Password"
              className="block w-full p-2 my-2 rounded-md border outline-none focus:ring-1 focus:ring-orange"
            />
            <div className="absolute right-4 top-11 text-slate-400 cursor-pointer" onClick={onChangeTypePassword}>
              {typePassword === "password" ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          <Button width="full">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginCms;
