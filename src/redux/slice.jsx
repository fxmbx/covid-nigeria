import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://covidnigeria.herokuapp.com/api",
});

export const baseSlice = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
