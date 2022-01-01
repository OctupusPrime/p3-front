import axios from 'axios'

export default {
    state: {
    },
    mutations: {
    },
    actions: {
        async getStatus({none}, params) {
            console.log(none)
            console.log(params)
            await axios.get('http://localhost:3000/status')
        }
    },
    modules: {
    }
  }
  