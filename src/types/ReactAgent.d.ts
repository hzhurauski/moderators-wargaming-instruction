declare module 'react-useragent' {
  import { FC } from 'react'
  export const withUserAgent: (Component: FC<PropsType>) => FC<PropsType>
}
