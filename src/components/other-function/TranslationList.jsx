import React, { createContext, useState, useContext } from 'react';

// Tạo context để lưu trữ và chia sẻ dữ liệu dịch
const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: { skills: "My own assessment" },
    vi: { skills: "Đánh giá của riêng tôi" },
  };

  const changeLanguage = (lng) => {
    setLanguage(lng);
  };

  return (
    <TranslationContext.Provider value={{ translations, language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Tạo hook để sử dụng dữ liệu dịch từ context
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
