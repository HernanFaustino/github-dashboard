import useCommits from '@/hooks';
import ContentHeader from './ContentHeader';

interface ContentProps {
  children: React.ReactNode;
}
const Content: React.FC<ContentProps> = ({ children }) => {
  const { commits, loading, error } = useCommits();
  
  return (
    <>
      <ContentHeader>Commit History</ContentHeader>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
      </main>
    </>
  );
};

export default Content;
