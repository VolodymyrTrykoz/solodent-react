import * as yup from "yup";

const phoneRegExp = /\d{3}[\s-]\d{2}[\s-]\d{2}|\d{3}-\d{2}-\d{2}/;

const schema = {
    first: yup.object().shape({
        username: yup.string().required(`Вкажіть ваше ім'я`),
        phone: yup.string()
            .matches(phoneRegExp, 'Вкажіть ваш номер телефону у форматі (067) 111-11-11')
            .required(`Вкажіть ваш номер телефону`)

    })
};

export default schema;