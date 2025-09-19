import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const SettingsContext = createContext();

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    company_name: 'BAMBA Natural',
    system_name: 'BAMBA Insights',
    company_slogan: 'Produtos Naturais Inteligentes',
    primary_color: '#10b981',
    secondary_color: '#3b82f6',
    accent_color: '#f59e0b',
    logo_url: '',
    openai_model: 'gpt-4o-mini',
    brevo_sender_name: 'BAMBA Insights',
    evolution_instance_name: 'bamba_insights'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await axios.get('/admin/settings');
      if (response.data.success) {
        setSettings(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
      // Use default settings if fetch fails
    } finally {
      setLoading(false);
    }
  };

  const updateSettings = async (newSettings) => {
    try {
      const response = await axios.put('/admin/settings', newSettings);
      if (response.data.success) {
        setSettings(response.data.data);
        return { success: true };
      } else {
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Erro ao atualizar configurações';
      return { success: false, error: errorMessage };
    }
  };

  const value = {
    settings,
    loading,
    updateSettings,
    fetchSettings
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
