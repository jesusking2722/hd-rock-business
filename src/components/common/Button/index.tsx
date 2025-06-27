interface ButtonProps {
  type: "primary" | "secondary" | "text" | "link" | "icon";
  label?: string;
  iconUrl?: string;
  className?: string;
  submit?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  iconUrl,
  className,
  submit,
  loading,
  onClick,
}) => {
  const buttonTypeStyles: Record<ButtonProps["type"], string> = {
    primary: "bg-[#F9A825] text-black",
    secondary: "bg-[#333333] text-white",
    text: "",
    link: "",
    icon: "",
  };

  return (
    <button
      className={`${
        buttonTypeStyles[type]
      } text-lg font-normal transition-all duration-200 ease-in-out hover:opacity-80 rounded-lg px-6 py-2 flex items-center justify-center gap-2 ${
        loading ? "opacity-80 cursor-not-allowed" : ""
      } ${className}`}
      type={submit ? "submit" : "button"}
      disabled={loading}
      onClick={onClick}
    >
      {loading && (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
      )}
      {loading ? "Loading..." : label}
      {!loading && iconUrl && (
        <img
          src={iconUrl}
          alt={label || "icon"}
          className="w-5 h-5 text-black"
        />
      )}
    </button>
  );
};

export default Button;
