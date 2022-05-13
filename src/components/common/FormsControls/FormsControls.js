import s from "./FormsControl.module.css"
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error;
    return <div className={s.formControl + " " + (hasError ? s.error : "")}>
        {children}
        <div>
            {hasError && <span>{error}</span>}
        </div>
    </div>
};

export const Textarea = (props) =>{
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props) =>{
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder}  name={name} validate={validators} component={component} {...props} />{text}
    </div>
);




// export const Textarea = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return <div className={s.formControl + " " + (hasError ? s.error : "")}>
//         <textarea {...input} {...props} />
//         <div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     </div>
// };
//
// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return <div className={s.formControl + " " + (hasError ? s.error : "")}>
//         <input {...input} {...props} />
//         <div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     </div>
// };