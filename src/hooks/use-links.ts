import { axiosInstance } from '@/configs/axios-base-config'

import LinkProps from '@/types/links'

import useSWR, { Fetcher } from 'swr'
const fetcher: Fetcher<LinkProps[], string> = (url: string) => {
  const res = axiosInstance({
    method: 'get',
    url,
    headers: {
      token: process.env.API_CONTENT_KEY,
    },
  }).then((res) => res.data)

  return res
}

export default function useLinks() {
  const { data, isLoading, error } = useSWR<LinkProps[], Error>('', fetcher)

  return { data, isLoading, error }
}
