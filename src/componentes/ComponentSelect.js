import { useField } from "formik";

const CustomSelect = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label>{label}</label>
            <select
                {...field}
                {...props}
            />    
        </>
    );
}

export default CustomSelect;