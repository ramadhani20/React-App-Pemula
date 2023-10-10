const Input = (props) => {
    const {type, placeholder} = props;
    return (
        <input type={type} className="w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder={placeholder} name={name}/>
    );
};
export default Input; 