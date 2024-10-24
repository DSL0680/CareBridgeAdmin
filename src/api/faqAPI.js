import axios from 'axios';

const host = 'http://10.10.10.105:8080/api/v1/faq';

// FAQ 목록 가져오기
export const getFAQList = async () => {
    try {
        const res = await axios.get(`${host}/list`);
        return res.data;
    } catch (e) {
        console.error('FAQ List Load Error', e);
        throw e;
    }
};

// FAQ 등록하기
export const insertFAQ = async (faqAdd) => {
    try {
        const res = await axios.post(`${host}/insert`, faqAdd);
        return res.data;
    } catch (e) {
        console.error('FAQ Post Add Error', e);
        throw e;
    }
};
