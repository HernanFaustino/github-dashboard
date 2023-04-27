import { Inter } from 'next/font/google';
import HeanderContainer from '@/containers/HeaderContainer';
import Content from '@/containers/Content';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-full">
      <HeanderContainer />

      <Content>Hola</Content>
    </div>
  );
}
