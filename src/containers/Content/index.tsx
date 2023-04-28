import useCommits from '@/hooks';
import ContentHeader from './ContentHeader';
import Image from 'next/image';

interface ContentProps {
  children: React.ReactNode;
}
const Content: React.FC<ContentProps> = ({ children }) => {
  const { commits, loading, error } = useCommits();

  return (
    <>
      <ContentHeader>Commit History</ContentHeader>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-white rounded-lg my-5">
          {
            <ul role="list" className="divide-y divide-gray-100">
              {commits.map((commit) => (
                <li key={commit.node_id} className="flex justify-between gap-x-6 py-5">
                  <div className="flex gap-x-4">
                    <img className="h-10 w-10 rounded-full" src={commit.author?.avatar_url} alt="" />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700 focus:z-10 hover:underline hover:cursor-pointer">
                        {commit.commit.message}
                      </p>
                      <a
                        className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:cursor-pointer"
                        href={commit.author?.html_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {commit.commit.author?.name}
                      </a>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{commit.commit.author?.email}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                      <a
                        className="text-sm leading-6 text-gray-900"
                        href={commit.html_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          type="button"
                          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        >
                          {commit.sha.substring(0, 7)}
                        </button>
                      </a>
                    </div>

                    {commit.commit.author?.date ? (
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        <time dateTime={commit.commit.author?.date}>{(new Date(`${commit.commit.author?.date}`)).toLocaleString()}</time>
                      </p>
                    ) : (
                      <div className="mt-1 flex items-center gap-x-1.5"></div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          }
        </div>
      </main>
    </>
  );
};

export default Content;
