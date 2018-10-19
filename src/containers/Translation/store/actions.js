import { TRANSLATION_LIST } from './constants';
const translationList = (list) => ({
    type: TRANSLATION_LIST,
    list
})

export const getTranslationList = () => {
    //http://47.95.113.63/ssr/api/news.json?secret=M5s2sPneDE
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/translations.json')
            .then((res) => {
                if(res.data.success){
                    const list = res.data.data;
                    dispatch(translationList(list))
                }else{
                    const list=[]
                    dispatch(translationList(list))
                }
            });
    }
}