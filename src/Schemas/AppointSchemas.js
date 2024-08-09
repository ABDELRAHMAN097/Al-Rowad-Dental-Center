import * as yup from 'yup';

const AppointSchemas = yup.object().shape({
    name: yup.string().required('name is required'),
    time: yup.string().required('Please select a time'),
    date: yup.string().required('Please select a date'),
    doctor: yup.string().required('Please choose a doctor'),
});

export default AppointSchemas;
