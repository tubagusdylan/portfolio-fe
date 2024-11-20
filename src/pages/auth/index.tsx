import { FC, ReactNode } from "react";
import { useEffect } from "react";
import { AuthState } from "@services/auth/state";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { setAuthUserState } = AuthState();

  useEffect(() => {
    setAuthUserState();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
