import { useCallback } from "react";
import { setAuthUser, setLogoutUser } from "./slice";
import { useAppDispatch } from "@services/hooks";
import { useLogoutMutation } from "./api";
import { toast } from "react-toastify";

interface ParamPayload {
  username: string;
  profileName: string;
  isAdmin: string;
}

export const AuthState = () => {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  const setAuthUserState = useCallback((payload: ParamPayload) => {
    dispatch(setAuthUser(payload));
  }, []);

  const setLogoutUserState = useCallback(async () => {
    const response = await logout();
    if (response.data?.success) {
      dispatch(setLogoutUser());
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.href = `${window.location.origin}/cms/dashboard`;
      }, 1500);
      return;
    }

    return toast.error((response.error as any).data.message);
  }, []);

  return {
    setAuthUserState,
    setLogoutUserState,
  };
};
