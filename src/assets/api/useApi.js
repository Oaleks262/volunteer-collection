import { useState, useEffect, useCallback } from 'react';
import { AdminApi, lendingData } from './api';

const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (apiFunction) => {
    try {
      setLoading(true);
      const response = await apiFunction();
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(lendingData.getTitle);
  }, [fetchData]);

  const loginAdmin = useCallback(async (body) => {
    try {
      const response = await AdminApi.loginAdmin(body);
      AdminApi.setToken(response.data.token);
      fetchData(AdminApi.getAdminBank);
      fetchData(AdminApi.getAdminTitle);
      fetchData(AdminApi.getAdminAbout);
    } catch (error) {
      setError(error);
    }
  }, [fetchData]);

  const logoutAdmin = useCallback(async (body) => {
    try {
      await AdminApi.logoutAdmin(body);
      // Інші дії після виходу
    } catch (error) {
      setError(error);
    }
  }, [fetchData]);

  const putAdminBank = useCallback(async (body) => {
    try {
      await AdminApi.putAdminBank(body);
      fetchData(AdminApi.getAdminBank);
    } catch (error) {
      setError(error);
    }
  }, [fetchData]);

  const putAdminTitle = useCallback(async (body) => {
    try {
      await AdminApi.putAdminTitle(body);
      fetchData(AdminApi.getAdminTitle);
    } catch (error) {
      setError(error);
    }
  }, [fetchData]);

  const putAdminAbout = useCallback(async (body) => {
    try {
      await AdminApi.putAdminAbout(body);
      fetchData(AdminApi.getAdminAbout);
    } catch (error) {
      setError(error);
    }
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    loginAdmin,
    logoutAdmin,
    putAdminBank,
    putAdminTitle,
    putAdminAbout,
  };
};

export default useApi;