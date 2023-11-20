import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoadingData = (dataFetcher, event = false) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchData = async (data) => {
    try {
      const response = await dataFetcher(data);
      setData(response?.data); // Додав ? для уникнення помилки, якщо response є null або undefined
      setIsLoading(false);
    } catch (error) {
      // Додав перевірку, чи error має response перед тим, як намагатися отримати status
      if (error.response && error.response.status === 401) {
        console.log(error.response.status);
        navigate("/login");
      } else {
        setError(error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (!event) {
      fetchData();
    }
  }, [dataFetcher, event]);

  const eventLoading = (data) => {
    fetchData(data);
  };

  return { data, isLoading, error, eventLoading };
};

export default useLoadingData;
