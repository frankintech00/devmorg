import React from 'react';

const FormInput = ({
	text,
	icon,
	placeholder,
	value,
	onInput,
	onKeyUp,
	readOnly = false,
}) => {
	return (
		<div className=''>
			<span className=''>
				{text} {icon}
			</span>
			<input
				type='number'
				value={value}
				className=''
				placeholder={placeholder}
				onInput={onInput}
				onKeyUp={onKeyUp}
				readOnly={readOnly}
			/>
		</div>
	);
};

export default FormInput;
