
interface ButtonProps{
  text?: string;
  variant?: 'primary' | 'cream' | 'invert' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
}
const variantClasses = {
  // primary: 'bg-black text-white border-main shadow-(--shadow-md) inline items-center justify-center font-(--font-body) hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none duration-200',
  // cream: 'bg-cream text-black border-main shadow-(--shadow-md) hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none duration-200',
  // invert: 'bg-white text-black border-main shadow-(--shadow-md) hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none duration-200',
  primary: 'btn btn-primary',
  cream:'btn btn-cream',
  invert:'btn btn-invert',
  ghost:'btn btn-ghost',
};

const sizeClasses = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
};


export default function Button({ text, variant = 'primary', size = 'md',href, onClick,  }: ButtonProps) {
  if (href) {
    return (
      <a className={`${variantClasses[variant]} ${sizeClasses[size]}`} href={href} onClick={onClick}>
        {text || "Button"}
      </a>
    );
  }
  return (
    <button 
      className={`${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {text || "Button"}
    </button>
  );
}

