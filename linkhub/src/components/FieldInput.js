import React from 'react';

function FieldInput({label, type, value, placeholder, onChange, width = '650px'}) {
    return (
        <div className={`flex flex-col w-[${width}]`}>
            <label className="text-primary font-light text-[30px] mb-[10px]">{label}</label>
            <input
                className= "border-b-2 border-primary border-solid bg-dark text-white text-[25px] outline-none"
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};
export default FieldInput;
