import * as yup from "yup";
export const AddModalformSchema = yup.object().shape({
  title: yup.string().required("Nome da tecnologia é obrigatório"),
  status: yup.string().required("É necessário selecionar um status"),
});
