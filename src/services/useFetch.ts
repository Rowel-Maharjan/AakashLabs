import { useEffect, useState } from "react";

const useFetch = <T>(fetchFuction: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchFuction();
      setData(data);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occured");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData, reset };
};

export default useFetch;
