import axios from 'axios'

const API = {
    async getApiCall(url){
        try {
            var res = await axios.get(url);
            if(res != null){
                return res;
            } else {
                return null
            }
        } catch(err) {
            return err
        }
    },
    async postApiCall(url, data){
        try{
            var res = await axios.post(url, data)
            if(res != null){
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