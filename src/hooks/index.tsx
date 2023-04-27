import { useEffect, useState } from 'react';

export default function useCommits() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [commits, setCommits] = useState<Commit[]>([]);

  const fetchCommits = async (signal: AbortSignal) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/commits`, { signal });
      const responseData = await response.json();
      const commits = responseData.data;
      setCommits(commits);
    } catch (e: any) {
      setError('Error fetching commits');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const abortController = new AbortController();
    fetchCommits(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, []);

  return { commits, loading, error };
}
