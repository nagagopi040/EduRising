import axios from 'axios'

const API = {
    getUserInfo: (url) => {
        axios.get(url).then(res => {
            if(res != null)
                return res
            else
                return null
        }).catch(err => {
            console.log(err)
        })
    }
}

export default API