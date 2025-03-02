
import { AUTH_CONFIG } from '../config';

/**
 * שמירת הטוקן בלוקל סטורג'
 */
export const setStoredToken = (token: string): void => {
  localStorage.setItem(AUTH_CONFIG.TOKEN_KEY, token);
};

/**
 * קבלת הטוקן מהלוקל סטורג'
 */
export const getStoredToken = (): string | null => {
  return localStorage.getItem(AUTH_CONFIG.TOKEN_KEY);
};

/**
 * הסרת הטוקן מהלוקל סטורג'
 */
export const removeStoredToken = (): void => {
  localStorage.removeItem(AUTH_CONFIG.TOKEN_KEY);
};

/**
 * שמירת טוקן רענון
 */
export const setRefreshToken = (token: string): void => {
  localStorage.setItem(AUTH_CONFIG.REFRESH_TOKEN_KEY, token);
};

/**
 * קבלת טוקן רענון
 */
export const getRefreshToken = (): string | null => {
  return localStorage.getItem(AUTH_CONFIG.REFRESH_TOKEN_KEY);
};

/**
 * הסרת טוקן רענון
 */
export const removeRefreshToken = (): void => {
  localStorage.removeItem(AUTH_CONFIG.REFRESH_TOKEN_KEY);
};

/**
 * שמירת זמן תפוגת הטוקן
 */
export const setTokenExpiry = (expiryTime: number): void => {
  localStorage.setItem(AUTH_CONFIG.TOKEN_EXPIRY_KEY, expiryTime.toString());
};

/**
 * קבלת זמן תפוגת הטוקן
 */
export const getTokenExpiry = (): number | null => {
  const expiry = localStorage.getItem(AUTH_CONFIG.TOKEN_EXPIRY_KEY);
  return expiry ? parseInt(expiry, 10) : null;
};

/**
 * בדיקה אם הטוקן פג תוקף
 */
export const isTokenExpired = (): boolean => {
  const expiry = getTokenExpiry();
  if (!expiry) return true;
  
  // המרה למילישניות והשוואה לזמן הנוכחי
  return Date.now() >= expiry;
};

/**
 * בדיקה אם הטוקן קיים
 */
export const hasToken = (): boolean => {
  return !!getStoredToken();
};

/**
 * ניקוי כל נתוני האימות
 */
export const clearAuthData = (): void => {
  removeStoredToken();
  removeRefreshToken();
  localStorage.removeItem(AUTH_CONFIG.TOKEN_EXPIRY_KEY);
};