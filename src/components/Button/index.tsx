interface ButtonProps {
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">{children}</div>
      </div>
    </div>
  );
};

export default Button;
