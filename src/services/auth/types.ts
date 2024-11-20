export interface BodyLogin {
  username: string;
  password: string;
}

export interface ResponseLogin {
  code: number;
  success: boolean;
  message: string;
  data: {
    token: string;
  };
}

export interface ResponseLogout {
  code: number;
  success: boolean;
  message: string;
  data: null;
}

export interface ResponseRefreshToken {
  code: number;
  success: boolean;
  message: string;
  data: {
    token: string;
  };
}
