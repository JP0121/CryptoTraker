import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    

};   


const baseUrl = 'https://coinranking1.p.rapidapi.com/';
const createRequest = (url) => ({url, headers: cryptoApiHeaders});


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
            getCrypto: builder.query({
                query: (count) => createRequest(`/coins?limit=${count}`),
            }),
            getCryptoDetails: builder.query({
                query: (coinId) => createRequest(`/coin/${coinId}`),
            }),
            getCryptoHistory: builder.query({
                query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
              }),

    })

});

export const {
    useGetCryptoQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery
} = cryptoApi;


