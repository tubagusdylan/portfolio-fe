import { FC, ReactNode } from "react";
import { useEffect } from "react";
import { AuthState } from "@services/auth/state";
import { useRefreshTokenQuery } from "@services/auth/api";
import { jwtDecode } from "jwt-decode";

interface AuthProviderProps {
  children: ReactNode;
}

interface JwtPayload {
  id: string;
  username: string;
  profileName: string;
  isAdmin: string;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { setAuthUserState } = AuthState();
  const { data, isSuccess } = useRefreshTokenQuery();

  useEffect(() => {
    if (isSuccess) {
      const decoded: JwtPayload = jwtDecode(data?.data.token as string);
      const payload = {
        username: decoded.username,
        profileName: decoded.profileName,
        isAdmin: decoded.isAdmin,
      };
      setAuthUserState(payload);
    }
  }, [isSuccess]);

  return <>{children}</>;
};

export default AuthProvider;
