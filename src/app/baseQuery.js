import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const baseUrl = process.env.REACT_APP_API_URL || "https://localhost:5255";
export const baseQuery = fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    prepareHeaders: (headers, {getState}) => {
        let state = getState();
        let user = state.oidc.user;
        let accessToken = user && user.access_Token;

        if(accessToken){
            headers.set('Authorization', `Bearer ${accessToken}`);
        }
        return headers;
    }
})

export const getApiUrl = `${baseUrl}/api/`