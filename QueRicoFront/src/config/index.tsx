export const API_CONFIG = {
    BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    TIMEOUT: 10000, // 10 שניות
  };
  
  // הגדרות אימות
  export const AUTH_CONFIG = {
    TOKEN_KEY: 'auth_token',
    REFRESH_TOKEN_KEY: 'refresh_token',
    TOKEN_EXPIRY_KEY: 'token_expiry', 
  };
  
  // הגדרות עבור בקשות לספקי AI
  export const AI_CONFIG = {
    API_KEY: process.env.REACT_APP_AI_API_KEY,
    ENDPOINT: process.env.REACT_APP_AI_ENDPOINT || 'https://api.openai.com/v1/chat/completions',
    MODEL: process.env.REACT_APP_AI_MODEL || 'gpt-3.5-turbo',
    MAX_REQUESTS_PER_MINUTE: 5, // הגבלת כמות בקשות לדקה
  };
  
  // הגדרות UI
  export const UI_CONFIG = {
    POST_PAGE_SIZE: 10,
    COMMENTS_PAGE_SIZE: 20,
    MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
    SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif'],
  };
  
  // הגדרות שגיאות
  export const ERROR_MESSAGES = {
    GENERAL: 'אירעה שגיאה. אנא נסה שנית מאוחר יותר.',
    NETWORK: 'בעיית תקשורת. אנא בדוק את החיבור לאינטרנט.',
    AUTH: {
      LOGIN_FAILED: 'התחברות נכשלה. אנא בדוק את פרטי ההתחברות.',
      REGISTER_FAILED: 'ההרשמה נכשלה. ייתכן ששם המשתמש או האימייל כבר קיימים במערכת.',
      TOKEN_EXPIRED: 'פג תוקף החיבור שלך. אנא התחבר מחדש.',
    },
    POSTS: {
      CREATE_FAILED: 'יצירת הפוסט נכשלה. אנא נסה שנית.',
      UPDATE_FAILED: 'עדכון הפוסט נכשל. אנא נסה שנית.',
      DELETE_FAILED: 'מחיקת הפוסט נכשלה. אנא נסה שנית.',
      NOT_FOUND: 'הפוסט לא נמצא או שנמחק.',
    },
    USER: {
      NOT_FOUND: 'המשתמש לא נמצא.',
      UPDATE_FAILED: 'עדכון פרטי המשתמש נכשל. אנא נסה שנית.',
    },
    VALIDATION: {
      REQUIRED_FIELD: 'זהו שדה חובה',
      INVALID_EMAIL: 'אנא הזן כתובת אימייל תקינה',
      PASSWORD_TOO_SHORT: 'סיסמה חייבת להכיל לפחות 6 תווים',
      PASSWORD_MISMATCH: 'הסיסמאות אינן תואמות',
      IMAGE_TOO_LARGE: 'התמונה גדולה מדי. גודל מקסימלי הוא 5MB',
      INVALID_IMAGE_TYPE: 'סוג הקובץ אינו נתמך. יש להשתמש בקבצי JPEG, PNG או GIF בלבד',
    },
  };
  
  export default {
    API: API_CONFIG,
    AUTH: AUTH_CONFIG,
    AI: AI_CONFIG,
    UI: UI_CONFIG,
    ERRORS: ERROR_MESSAGES,
  };