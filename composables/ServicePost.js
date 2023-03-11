import axios from 'axios'

export default async (path, formData) => {
  const data = ref(null)
  const loading = ref(true)
  const BASE_API_URL = 'http://localhost:8000/api'

  const urlComplete = BASE_API_URL + path

  const result = await axios.post(urlComplete, formData)

  data.value = result.data
  loading.value = false

  return { data, loading }
}
