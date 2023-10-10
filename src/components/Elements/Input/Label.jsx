const Label = (props) => {
    const {name, children} = props;
    return (
    <label htmlFor={name} className="block mb-2 font-medium text-slate-500">{children}</label>
    )
}
export default Label;