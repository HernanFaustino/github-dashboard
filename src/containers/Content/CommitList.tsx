interface CommitListProps {
  children: React.ReactNode;
}

interface CommitRowProps {
  children: React.ReactNode;
}

interface CommitColProps {
  children: React.ReactNode;
}

const CommitList: React.FC<CommitListProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-white rounded-lg my-5">
      <ul role="list" className="divide-y divide-gray-1">
        {children}
      </ul>
    </div>
  );
};

export const CommitRow: React.FC<CommitRowProps> = ({ children }) => {
  return <li className="flex justify-between gap-x-6 py-5">{children}</li>;
};

export const CommitCol: React.FC<CommitColProps> = ({ children }) => {
  return <div className="flex gap-x-4">{children}</div>;
};

export default CommitList;
