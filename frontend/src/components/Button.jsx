function Button({ className, handler, children }) {
  return (
    <button
      className={`w-max h-max p-2 rounded-lg bg-slate-900 hover:bg-slate-400 ${className}`}
      onClick={(e) => handler(e)}
    >
      {children}
    </button>
  );
}

export default Button;
