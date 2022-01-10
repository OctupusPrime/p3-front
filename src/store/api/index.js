import axios from 'axios'

export default {
    state: {
    },
    mutations: {
    },
    actions: {
        async getStatus({none}, params) {
            console.log(none)
            const formData = new FormData()     
            formData.append('file', params.uploadFile)
            formData.append('data', JSON.stringify(params))
            axios.post('http://localhost:3000/api/upload', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }
    },
    modules: {
    }
  }
  