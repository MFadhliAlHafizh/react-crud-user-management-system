export function PrimaryButton({ type="button", onClick= () => {}, children, className }) {
  return (
    <button type={type} onClick={onClick} className={`text-sm font-semibold p-2 w-28 rounded-md cursor-pointer bg-linear-to-br from-[#018A85] to-[#0C4259] text-white hover:scale-95 transition ${className}`}>{children}</button>
  )
}

export function SecondaryButton({ type="button", onClick= () => {}, children, className }) {
  return (
    <button type={type} onClick={onClick} className={`text-sm font-semibold p-2 w-28 rounded-md cursor-pointer border-2 hover:bg-primaryColor text-primaryColor hover:text-white transition ${className}`}>{children}</button>
  )
}
