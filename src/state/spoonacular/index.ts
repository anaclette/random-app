import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {InterfacesTs} from '@/types/interfaces';
import {baseUrl} from '@/utils/constants';

const SPOONACULAR_API = 'spoonacularApi';

export const spoonacularApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  reducerPath: SPOONACULAR_API,
  endpoints: builder => ({
    getRecipes: builder.query<InterfacesTs, string>({
      query: () => `${baseUrl}`,
    }),
  }),
});

export const {useGetRecipesQuery} = spoonacularApi;
