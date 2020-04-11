import * as yup from "yup";

const phoneRegExp = /^\+?3?8?(0\d{9})$/;

const schema = {
    first: yup.object().shape({
        username: yup.string().required(`Вкажіть ваше ім'я`),
        phone: yup.string()
            .matches(phoneRegExp, 'Вкажіть ваш номер телефону у форматі +380671111111')
            .required(`Вкажіть ваш номер телефону`)

    })
};

export default schema;