import { baseSlice } from "./slice";

export const getCovidSlice = baseSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCases: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCasesQuery } = getCovidSlice;
