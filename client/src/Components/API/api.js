import axios from "axios";

const api  = axios.create({
    baseURL : `http://localhost:${process.env.PORT}`,
    headers: {
        'Content-Type': 'application/json',
      },
})

export default api