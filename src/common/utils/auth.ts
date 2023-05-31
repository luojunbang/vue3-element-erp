const TOKEN_KEY = '--UP-Token'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}
export function removeToken() {
  return localStorage.removeItem(TOKEN_KEY)
}
export function saveToken(token: string) {
  return localStorage.setItem(TOKEN_KEY, token)
}
