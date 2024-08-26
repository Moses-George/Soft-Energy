

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BASE_URL } from "@/lib/variables";

const BASE_URL = process.env.NEXT_PUBLIC_BASEURL;

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api`,
  }),
  tagTypes: ["form"],
  endpoints: (builder) => ({
    sendForm: builder.mutation({
      query(payload) {
        return {
          url: "/send-form",
          method: "POST",
          //   credentials: "include",
          body: payload,
        };
      },
      invalidatesTags: ["form"],
    }),
  }),
});

export const { useSendFormMutation } = formApi;
