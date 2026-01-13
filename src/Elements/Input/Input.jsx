function Input({ type, name, placeholder, value, className, onChange = () => {} }) {
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required
      className={`border border-primaryColor focus:ring outline-none rounded w-full py-2 px-3 text-sm text-slate-700 ${className}`}
    />
  );
}

export default Input;
