import FlowerLangData from '@/models/FlowerLangData';

import {api} from '../../api';

export type EndpointData = {
  data: FlowerLangData[];
};

export const flowerLangApi = api.injectEndpoints({
  endpoints: build => ({
    fetchFlowerLangList: build.query<EndpointData, void>({
      query: () =>
          'macros/echo?user_content_key=Yel8UkdLxDSeyVwzGlGYuqEiQ82kPIijHTd1KO9oftUFbPeu2lQlj8_jRme2dTdrxYRgxbK9gWGHh9A5Xm9dVHswqC--_tLwm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGNQ4_zQQva2YQSqxRE857aNwTiJqYNKzde9U5AS4WsMvVduGQitIbS18q1bRzD7Wa4Jd72mjfYlbmj-DbakE0OMNOJV5SiYKtz9Jw9Md8uu&lib=Mi4Wdji6u3fQn1wjia56H4O4uhDhZD69S',
    }),
  }),
  overrideExisting: true,
});

export const {useLazyFetchFlowerLangListQuery} = flowerLangApi;
