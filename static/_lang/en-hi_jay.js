export default (context) => {
    return new Promise(function (resolve) {
      resolve({
        BUTTON: {
          CREATE: 'फिल्म बनाएं',
          LOGIN: 'लॉग इन करें',
          MORE: 'पढ़ना',
          FREE: 'निःशुल्क आजमाएं'
        },
        HERO: {
          HEADER: 'एक पल में बहुत बढ़िया प्रेरणादायक वीडियो',
          SUBHEADER: 'AI(कृत्रिम बुद्धि) वीडियो निर्माता'
        },
        FEATURES: {
          1: {
            HEADER: 'Templates',
            TEXT: 'विभिन्न प्रकार के Templates के साथ सिनेमाई वीडियो बनाएं'
          },
          2: {
            HEADER: 'रचनात्मक AI',
            TEXT: 'रचनात्मक AI आपके वीडियो का विश्लेषण करता है और सर्वश्रेष्ठ क्षणों का चयन करता है'
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
          HOME: 'मुख्य पृष्ठ',
          ABOUT: 'बारे में',
          EDITOR: 'संपादक',
          BLOG: 'Blog',
          OLD: 'पुराना संस्करण',
          CONTACTS: 'संपर्क',
          COOKIES: 'Cookies Policy',
          PRIVACY: 'Privacy Policy',
          TERMS: 'सेवा की शर्तें'
        },
        META: {
          TITLE: 'ऑनलाइन वीडियो संपादक | AI वीडियो निर्माता',
          DESCRIPTION: 'स्वचालित वीडियो संपादन। तेज, आसान और मुफ्त। संगीत, प्रभाव, Templates । आर्टिफिशियल इंटेलिजेंस के साथ वीडियो संपादन ऑनलाइन।'
        }
      })
    })
  }