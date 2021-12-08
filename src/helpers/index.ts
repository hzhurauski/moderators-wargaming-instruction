import { appTitle } from 'data'
import { AppTitleType } from 'types/data/DataTypes'

export const setTitleHelper = (pathname: string): string => {
  const defaultTitle = {
    title: 'Страница не найдена',
  }

  const { title } =
    (appTitle.find((t) => t.pathname === pathname) as AppTitleType) ||
    defaultTitle

  return title
}
