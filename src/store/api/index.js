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
            // console.log(formData.get('file'))
            axios.post('https://p3m-back.herokuapp.com/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }
    },
    modules: {
    }
  }
  