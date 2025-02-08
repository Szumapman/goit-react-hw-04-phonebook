type InputProps = {
    type: string;
    name: string;
    pattern: string;
    title: string;
    required: boolean;
  };

export const Input = ({ type, name, pattern, title, required }: InputProps) => {
  
    return (
      <>
        <label htmlFor={name}>{name}</label>  
        <input
          type={type}
          name={name}
          pattern={pattern}
          title={title}
          required={required}
        />
      </>
  );
};