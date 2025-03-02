
import api from './api';

interface LoginResponse {
  user: any;
  accessToken: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export const loginUser = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await api.post('/auth/login', { username, password });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to login');
    }
    throw new Error('Network error');
  }
};

export const registerUser = async (username: string, email: string, password: string): Promise<LoginResponse> => {
  try {
    const userData: RegisterData = { username, email, password };
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to register');
    }
    throw new Error('Network error');
  }
};

export const refreshToken = async (): Promise<LoginResponse> => {
  try {
    const response = await api.post('/auth/refresh-token');
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to refresh token');
    }
    throw new Error('Network error');
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await api.post('/auth/logout');
  } catch (error) {
    console.error('Logout error:', error);
  }
};

// פונקציה להאזנה לאירוע התחברות מוצלחת מספק חיצוני
export const handleSocialLoginCallback = (callback: (user: any, token: string) => void) => {
  window.addEventListener('message', (event) => {
    // ודא שמקור ההודעה הוא השרת שלך
    if (event.origin === process.env.REACT_APP_API_URL) {
      const { user, token } = event.data;
      if (user && token) {
        callback(user, token);
      }
    }
  });
};