import { post } from "../baseFetch";
import { RegisterParams, LoginParams } from "./AuthDto";
import { CustomError } from "../../common/helpers/errorHelper";

const register = async (params: RegisterParams) => {
  const response = await post("api/Auth/SignUp", JSON.stringify(params));

  if (!response.ok) {
    switch (response.status) {
      case 409:
        throw new CustomError(
          response.status.toString(),
          "Пользователь с таким логином уже существует!"
        );
      default:
        throw new CustomError(
          response.status.toString(),
          "Ошибка регистрации!"
        );
    }
  }

  return response.json();
};

const login = async (params: LoginParams) => {
  const response = await post("api/Auth/SignIn", JSON.stringify(params));

  if (!response.ok) {
    switch (response.status) {
      case 403:
        throw new CustomError(
          response.status.toString(),
          "Пользователь с таким логином/паролем не найден!"
        );
      default:
        throw new CustomError(
          response.status.toString(),
          "Ошибка авторизации!"
        );
    }
  }

  return response.json();
};

export const authServices = {
  login,
  register,
};
