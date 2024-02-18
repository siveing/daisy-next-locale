// Define the URL you want to make a request to
export const baseURL = process.env.API_HOST;

export type TParams = {
    [key: string]: string;
};

// Common function to fetch data from the API
const baseServiceApi = async (endpoint: string, method: "POST" | "GET" | "PATCH" | "PUT" | "DELETE" = 'GET', headers = {}, params: TParams = {}, revalidate?: number) => {

    if (baseURL == undefined) {
        return;
    }

    // Construct the query string from the parameters
    const queryString = new URLSearchParams(params).toString();

    // Construct the URL with the endpoint and parameters
    const url = `${baseURL}/api/v2/${endpoint}${queryString ? '?' + queryString : ""}`;

    try {
        const response = await fetch(url, {
            // cache: "force-cache",
            // next: {
            //     revalidate: revalidate || 3600,
            // },
            method: method,
            headers: {
                ...headers,
                'Content-Type': 'application/json', // Example header
            },
            // You can add other options like body for POST requests
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    } catch (error: any) {
        throw new Error('There was a problem with your fetch operation:', error);
    }
};

export default baseServiceApi;