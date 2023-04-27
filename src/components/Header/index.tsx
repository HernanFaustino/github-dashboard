

interface HeaderProps {
  children: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
