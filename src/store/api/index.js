import axios from 'axios'

export default {
    state: {
    },
    mutations: {
    },
    actions: {
        async getStatus() {
            console.log(1)
            await axios.get('http://localhost:3000/status')
        }
    },
    modules: {
    }
  }
  