import * as yup from 'yup'

const RegisterSchema = yup.object().shape({
    fullName: yup.string().required('name is required') ,
    phone: yup.string().required('phone is required') ,
    email: yup.string().email('enter a valid emeil').required('email is required'),
    password: yup.string().min(8).required('password is required'),
    confirm_password: yup.string().min(8).required('confirm_password is required').oneOf([yup.ref('password')]),
})
export default RegisterSchema;