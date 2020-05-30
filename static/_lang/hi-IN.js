export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      BUTTON: {
        CREATE: 'फिल्म बनाएं',
        LOGIN: 'लॉग इन करें',
        MORE: 'पढ़ना',
        FREE: 'इस निशुल्क आज़माएं'
      },
      HERO: {
        HEADER: 'एक पल में विस्मय-प्रेरणादायक वीडियो',
        SUBHEADER: 'कृत्रिम बुद्धि(AI) वीडियो निर्माता'
      },
      FEATURES: {
        1: {
          HEADER: 'नमूना (टेम्पलेट्स)',
          TEXT: 'विभिन्न प्रकार के टेम्पलेट्स के साथ सिनेमाई वीडियो बनाएं'
        },
        2: {
          HEADER: 'रचनात्मक AI',
          TEXT: 'क्रिएटिव AI आपके वीडियो का विश्लेषण करता है और सर्वश्रेष्ठ क्षणों का चयन करता है'
        },
        3: {
          HEADER: 'सामाजिक',
          TEXT: 'किसी भी आयाम में वीडियो बनाएं (वर्ग, क्षैतिज, लंबवत)'
        }
      },
      ABOUT: {
        HEADER: 'एक पल में वीडियो',
        SUBHEADER: 'AI वीडियो निर्माता'
      },
      MENU: {
        HOME: 'मुख पृष्ठ',
        ABOUT: 'बारे में',
        EDITOR: 'संपादक',
        BLOG: 'ब्लॉग',
        OLD: 'पुराना संस्करण',
        CONTACTS: 'संपर्क',
        COOKIES: 'कुकीज़ नीति',
        PRIVACY: 'गोपनीयता नीति',
        TERMS: 'सेवा की शर्तें'
      },
      META: {
        TITLE: 'ऑनलाइन वीडियो संपादक | AI वीडियो निर्माता',
        DESCRIPTION: 'स्वचालित वीडियो संपादन। तेज, आसान और मुफ्त। संगीत, प्रभाव, टेम्पलेट। आर्टिफिशियल इंटेलिजेंस के साथ वीडियो संपादन ऑनलाइन।'
      }
    })
  })
}
