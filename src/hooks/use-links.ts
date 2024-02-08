import { axiosInstance } from '@/configs/axios-base-config'

import LinkProps from '@/types/links'

import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<LinkProps[], string> = (url: string) => {
  const res = axiosInstance({
    method: 'get',
    url: url
  }).then((res) => res.data)

  return res
}

export default function useLinks() {
  const {data, isLoading, error} = useSWR<LinkProps[], Error>('content/c590d2c06e8d1cc2ddd9d0130b49a211fa6e8a67 ', fetcher)

  return {data, isLoading, error}
}