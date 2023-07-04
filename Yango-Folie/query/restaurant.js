import { API_KEY } from "../configs/api";

export async function getRestaurants() {
    const data = await fetch(`${API_KEY}/restaurants`);
    return data.json();
}