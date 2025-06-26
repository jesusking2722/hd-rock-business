interface TextAreaProps {
  label?: string;
  placeholder: string;
  value?: string;
  isInvalid?: boolean;
  invalidTxt?: string;
  disabled?: boolean;
  onChange: (val: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  isInvalid,
  invalidTxt,
  disabled,
  onChange,
}) => {
  return (
    <div className="w-full space-y-2">
      {label && <label className="text-white">{label}</label>}
      <textarea
        placeholder={placeholder}
        className="bg-[#364C62] outline-none border-none py-2 px-4 rounded-lg text-white disabled:cursor-not-allowed w-full resize-none h-[150px]"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        disabled={disabled}
      />
      {isInvalid && invalidTxt && (
        <p className="text-red-500 text-sm">{invalidTxt}</p>
      )}
    </div>
  );
};

export default TextArea;
