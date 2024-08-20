import React, { createContext, useState, useContext } from 'react';

// Tạo context để lưu trữ và chia sẻ dữ liệu dịch
const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
        aboutMe: "My name is Dingo, I'm so glad you came here and discovered the wonders of my website.",
        thisWebsite: "This is my Blog made with ReactJS, you can find more by joining me on my Artwork site below.",
        desire: "In the future, I will have more projects for myself or maybe with a group. But no matter what, I really want to make the most of what I have to achieve it.",
        mySkills: "My own assessment",
        otherThings: "- If you are interested, please join me via social networks below -",
        artworkSite: "- My artwork site -",
      },
      vi: {
        aboutMe: "Tôi tên là Dingo, tôi rất vui vì bạn đã đến đây và khám phá những điều tuyệt vời trên trang web của tôi.",
        thisWebsite: "Đây là Blog của tôi được làm bằng ReactJS, bạn có thể tìm hiểu thêm bằng cách tham gia trang Artwork của tôi bên dưới.",
        desire: "Trong tương lai, tôi sẽ có nhiều dự án hơn cho riêng mình hoặc có thể với một nhóm. Nhưng dù gì đi nữa, tôi thực sự muốn tận dụng tối đa những gì tôi có để đạt được điều đó.",
        mySkills: "Đánh giá của riêng tôi",
        otherThings: "- Nếu bạn quan tâm, hãy tham gia với tôi qua các mạng xã hội bên dưới -",
        artworkSite: "- Trang Artwork của tôi -",
      }
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
