// src/api.js

const API_BASE_URL = 'https://podcast-api.netlify.app';

export const fetchShows = async () => {
    const response = await fetch(`${API_BASE_URL}/shows`);
    return response.json();
};

export const fetchShowDetails = async (showId) => {
    const response = await fetch(`${API_BASE_URL}/shows/${showId}`);
    return response.json();
};
