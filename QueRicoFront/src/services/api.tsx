
import axios from 'axios';
import { API_CONFIG, AUTH_CONFIG } from '../config';
import { getStoredToken } from '../utils/token';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: API_CONFIG.TIMEOUT,
});

// הוספת Interceptor להוספת טוקן לכל בקשה
api.interceptors.request.use(
  (config) => {
    const token = getStoredToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor לטיפול בשגיאות
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // אם השגיאה היא 401 (לא מורשה) ואנחנו לא בנתיב של התחדשות טוקן
    if (
      error.response &&
      error.response.status === 401 &&
      !error.config.url.includes('refresh-token')
    ) {
      // לוגיקה לניסיון לחדש את הטוקן תתבצע בקונטקסט האימות
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;