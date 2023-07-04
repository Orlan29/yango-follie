import { API_KEY } from "../configs/api";

export async function getDetail(id) {
    const data = await fetch(`${API_KEY}/restaurant/${id}`);
    return data.json();
}