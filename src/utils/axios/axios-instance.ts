import axios from "axios"

export default function axiosInstance() {
	axios.create({
		baseURL: "http://localhost:8080/"
	})
}