import Header from '@/components/Header';
import Navigation, { NavigationItem } from '@/components/Navigation';
import User from '@/components/User';

interface HeaderProps {
  children: React.ReactNode;
}
const HeaderContainer: React.FC<{}> = () => {
  return (
    <Header>
      <Navigation>
        <NavigationItem name="Dashboard" href="#" current />
      </Navigation>
      <User />
    </Header>
  );
};

export default HeaderContainer;
