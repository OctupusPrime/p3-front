import { ref } from 'vue'
import axios from 'axios'

export default function getStatus() {
    const error  = ref(null)
    
    const check = async () => {
        try {
            await axios.get('https://p3m-back.herokuapp.com/status')
        } catch (e) {
            error.value = e
        }
    }

    return { error, check }
}