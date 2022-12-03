import * as yup from "yup";
export const LoginformSchema = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha  é obrigatório"),
});
