const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

export async function fetchTopologySnapshot() {
    try {
        const response = await fetch(`${API_BASE_URL}/topology/snapshot`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch initial topology snapshot:", error);
        return [];
    }
}
