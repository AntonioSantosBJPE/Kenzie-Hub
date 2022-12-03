import * as yup from "yup";

export const RegisterformSchema = yup.object().shape({
  name: yup.string().trim().required("Nome é obrigatório"),
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha  é obrigatório")
    .matches(/(?=.*[A-Za-z])/, "É preciso conter ao menos  uma letra!")
    .matches(/(?=.*?[0-9])/, "É preciso conter ao menos  um número!")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É preciso conter ao menos  um caracterer especial!"
    )
    .min(8, "É preciso conter ao menos 8 caracteres!"),
  passwordConfirmation: yup
    .string()
    .required("Confirmar senha é obrigatório")
    .oneOf([yup.ref("password"), null], "As senhas não conferem"),
  bio: yup.string().trim().required("Bio é obrigatório"),
  contact: yup.string().trim().required("Contato é obrigatório"),
  course_module: yup.string().required("É necessário selecionar um módulo"),
});
