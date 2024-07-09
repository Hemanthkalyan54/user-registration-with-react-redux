const Input = (props) => {
    let { inputchange, placeholder, type, name,label,value} = props;
    return (
        <>
            <div className="mb-2">
                <label htmlFor={name} className="form-label">{label}</label>
                <input className="form-control"
                    value={value}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={inputchange}
                    id={name}></input>
            </div>
        </>
    )
}
export default Input;