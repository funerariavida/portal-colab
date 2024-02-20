import { axiosInstance } from '@/configs/axios-base-config'

import LinkProps from '@/types/links'

import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<LinkProps[], string> = (url: string) => {
  const res = axiosInstance({
    method: 'get',
    url,
  }).then((res) => res.data.data)

  return res
}

export default function useLinks() {
  const { data, isLoading, error } = useSWR<LinkProps[], Error>(
    '/links',
    fetcher,
    {
      refreshInterval: 1, // refresh data every 1s
    },
  )

  return { data, isLoading, error }
}
