const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
