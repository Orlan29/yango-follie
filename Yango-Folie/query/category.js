import { API_KEY } from "../configs/api";

export async function getCategories() {
    const data = await fetch(`${API_KEY}/categories`);
    return data.json();
}