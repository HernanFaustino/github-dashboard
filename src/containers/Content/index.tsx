import useCommits from '@/hooks';
import ContentHeader from './ContentHeader';
import CommitList, { CommitRow } from './CommitList';
import { CommitMessage, CommmitDate, HashButton, UserImage, UserInfo } from './CommitInfo';

interface ContentProps {
}
const Content: React.FC<ContentProps> = () => {
  const { commits, loading, error } = useCommits();

  return (
    <>
      <ContentHeader>Commit History</ContentHeader>
      <CommitList>
        {commits.map((commit) => (
          <CommitRow key={commit.node_id}>
            <div className="flex gap-x-4">
              <UserImage url={`${commit.author?.avatar_url}`} />
              <div className="min-w-0 flex-auto">
                <CommitMessage message={commit.commit.message} />
                <UserInfo
                  name={`${commit.commit.author?.name}`}
                  email={`${commit.commit.author?.email}`}
                  url={`${commit.author?.html_url}`}
                />
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col items-end">
              <HashButton sha={commit.sha} url={commit.html_url} />
              <CommmitDate date={`${commit.commit.author?.date}`} />
            </div>
          </CommitRow>
        ))}
      </CommitList>
    </>
  );
};

export default Content;
