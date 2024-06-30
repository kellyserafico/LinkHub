import React from 'react';
import "../styles.css"
const Button = ({text, onClick}) => {
    return (
        <button
            className="w-fit text-[20px] rounded-full border-2 border-primary text-primary px-4 py-2"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;