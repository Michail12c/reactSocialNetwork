import React from 'react';
import style from './FormsControls.module.css';

const FormControl = ({input, meta, child, ...props}) =>{
	const hasError = meta.touched && meta.error

	return (
      <div className = {style.formControl + ' ' + (hasError ?  style.error : '')}>
      <div>
       {props.children}
       </div>
      { hasError && <span>{meta.error}</span>}
      </div>
	)
}


export const TextArea = (props) =>{
	const  {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) =>{
	const  {input, meta, child, ...restProps} = props;
 return <FormControl {...props}><input{...input} {...restProps}/></FormControl>
}

