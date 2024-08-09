import * as yup from 'yup'

const LoginSchema = yup.object().shape({
    email: yup.string().email('enter a valid emeil').required('email is required'),
    password: yup.string().min(8).required('password is required'),
})
export default LoginSchema;