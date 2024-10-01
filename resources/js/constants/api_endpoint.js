export const API_ENDPOINT = {
    baseUrl: `${window.location.origin}/api`,
    csrfCookie: `${window.location.origin}/sanctum/csrf-cookie`,
    sendOtp: 'send-otp',
    verifyOtp: 'verify-otp',
    auth: {
        me: 'get-user',
        login: 'login'
    }
}
