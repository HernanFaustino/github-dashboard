interface UserImageProps {
  url: string;
}
interface CommitMessageProps {
  message: string;
}

interface UserInfoProps {
  name: string;
  email: string;
  url: string;
}

interface HashButtonProps {
  sha: string;
  url: string;
}

interface CommitDateProps {
  date: string;
}

export const UserImage: React.FC<UserImageProps> = ({ url }) => {
  return <img className="h-10 w-10 rounded-full" src={url} alt="" />;
};

export const CommitMessage: React.FC<CommitMessageProps> = ({ message }) => {
  return (
    <p className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700 focus:z-10 hover:underline hover:cursor-pointer">
      {message}
    </p>
  );
};

export const UserInfo: React.FC<UserInfoProps> = ({ name, email, url }) => {
  return (
    <div className="min-w-0 flex-auto">
      <a
        className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:cursor-pointer"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{email}</p>
    </div>
  );
};

export const HashButton: React.FC<HashButtonProps> = ({ sha, url }) => {
  return (
    <a className="text-sm leading-6 text-gray-900" href={url} target="_blank" rel="noreferrer">
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        {sha.substring(0, 7)}
      </button>
    </a>
  );
};

export const CommmitDate: React.FC<CommitDateProps> = ({ date }) => {
  return (
    <p className="mt-1 text-xs leading-5 text-gray-500">
      <time dateTime={date}>{new Date(date).toLocaleString()}</time>
    </p>
  );
};
