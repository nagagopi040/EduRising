import axios from 'axios'

const API = {
    async getApiCall(url){
        try {
            var data = await (url);
            if(data != null){
                return data;
            } else {
                return null
            }
        } catch(err) {
            return err
        }
    },
    async postApiCall(url, data){
        try{
            var res = await (url, data)
            if(data != null){
                return true
            } else {
                return false
            }
        }catch(err){
            return err
        }
    }
}

export default API