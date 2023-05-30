import { useState } from 'react';
import { useEffect } from 'react';

export function useFetch(url, params) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, params);
      const resData = await response.json();
      setData(resData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params?.method || params?.method !== 'GET') {
      fetchData();
    }
  }, [url]);

  return { fetchData, data, error, loading };
}
