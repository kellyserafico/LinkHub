function EditContentInput({label, value, onChange}){
    return (
        <div className="flex flex-row items-start justify-end pr-[30px] m-auto p-[5px]">
        <label className="text-black font-regular text-[12px] mb-[10px] min-w-fit">{label}</label>
        <input
            className= "ml-[5px] w-[300px] border-b-[1px] border-black border-solid font-light bg-white text-black text-[12px] outline-none"
            type= "text"
            value={value}
            onChange={onChange}
        />
    </div>
    );
}

export default EditContentInput;