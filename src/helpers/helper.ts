import { AppTitleType } from 'types/Types'

const appTitle = [
  { pathname: '/home', title: 'Введение' },
  { pathname: '/login', title: 'Aутентификация' },
  { pathname: '/network/search/vk', title: 'Поиск - Vk' },
  { pathname: '/network/search/telegram', title: 'Поиск - Telegram' },
  { pathname: '/network/search/discord', title: 'Поиск - Discord' },
  { pathname: '/network/search/instagram', title: 'Поиск - Instagram' },
  { pathname: '/network/formalization/vk', title: 'Оформление - Vk' },
] as AppTitleType[]

export const setTitleHelper = (pathname: string) => {
  const defaultTitle = {
    title: 'Страница не найдена',
  }

  const { title } =
    (appTitle.find((t) => t.pathname === pathname) as AppTitleType) ||
    defaultTitle

  return title
}

export const tableData = [
  {
    0: 'продаю, куплю, обмен, обменяю, раздача, прокачка, буст, магазин(премиум), shop',
    1: 'продам, продажа, продается | покупаю, скупаю, купля, закупка | отдам, дам, отдача, раздам, раздаю, розыгрыш | поднятие статистики | маркет, рынок, аукцион',
    2: 'ак, акк, акаунт, аккаунт | код, премиум/бонус-коды | читы | золото, голда',
    3: 'wot, world of tanks, ворлд оф танкс',
  },
]
