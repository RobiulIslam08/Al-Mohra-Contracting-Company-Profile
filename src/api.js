import axios from 'axios';

// ১. মেইন API এর জন্য Axios Instance
const api = axios.create({
    baseURL: 'https://backend.trustbrightservice.com/api/',
    headers: {
        'Accept': 'application/json'
    }
});

// ২. দ্বিতীয় বেজ ইউআরএল (প্রয়োজন হলে ব্যবহারের জন্য)
export const baseURLTwo = 'https://backend.trustbrightservice.com/';

// ৩. কোম্পানির লোগোর সরাসরি পাথ (যেকোনো পেজে ব্যবহারের জন্য)
export const COMPANY_LOGO_URL = "https://backend.trustbrightservice.com/public/siteasset/logo.jpg";

export default api;
