import { ref } from 'vue'
import axios from 'axios'

export default function useMergeDoc() {
    const reqStatus = ref(null)
    const reqError  = ref(null)

    const send = async (params) => {
        const formData = new FormData()     
        formData.append('file', params.uploadFile)
        formData.append('data', JSON.stringify(params))

        try {
            reqStatus.value = 'pending'
            await axios.post('http://localhost:3000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            reqStatus.value = 'resolve'
        } catch (e) {
            reqStatus.value = 'reject'
            reqError.value = e.response.data.message
        }
    }

    return { reqStatus, reqError, send }
}