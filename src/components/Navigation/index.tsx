import { classNames } from '@/common/utils';

interface NavigationProps {
  children: React.ReactNode;
}
const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    <div className="flex items-center">
      <div className="ml-10 flex items-baseline space-x-4">{children}</div>
    </div>
  );
};

interface ItemProps {
  name: string;
  href: string;
  current?: boolean;
}

export const NavigationItem: React.FC<ItemProps> = ({ name, href, current }) => {
  return (
    <a
      key={name}
      href={href}
      className={classNames(
        current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'rounded-md px-3 py-2 text-sm font-medium'
      )}
      aria-current={current ? 'page' : undefined}
    >
      {name}
    </a>
  );
};

export default Navigation;
