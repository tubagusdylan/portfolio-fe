import { useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { setAuthUser, setLogoutUser } from "./slice";
import { useAppDispatch } from "@services/hooks";
import { useRefreshTokenQuery, useLogoutMutation } from "./api";
import { toast } from "react-toastify";
import PATH from "@config/path";

interface JwtPayload {
  id: string;
  username: string;
  profileName: string;
  isAdmin: string;
}

export const AuthState = () => {
  const dispatch = useAppDispatch();
  const { data, isError } = useRefreshTokenQuery();
  const [logout] = useLogoutMutation();

  const setAuthUserState = useCallback(() => {
    if (isError) {
      return (window.location.href = `${window.location.origin}${PATH.LOGIN_PAGE}`);
    }
    const decoded: JwtPayload = jwtDecode(data?.data.token as string);

    const payload = {
      username: decoded.username,
      profileName: decoded.profileName,
    };

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
