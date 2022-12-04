import * as yup from "yup";
export const InfosModalformSchema = yup.object().shape({
  status: yup.string().required("É necessário selecionar um status"),
});
