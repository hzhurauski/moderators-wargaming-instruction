import {
  CloseOutlined,
  GithubOutlined,
  HomeOutlined,
  MenuOutlined,
} from '@ant-design/icons'
import MenuMyContacts from 'components/menu/MenuMyContacts'
import MenuNetworks from 'components/menu/MenuNetworks'
import MenuWargamingProjects from 'components/menu/MenuWargamingProject'
import NetworkIcon from 'components/network/NetworkIcon'
import {
  AppTitleType,
  AuthorizedMenuItemsType,
  AuthorizedSubMenuItemsType,
  BreadcrumbDataType,
  FormalizationNetworksType,
  MyContactsType,
  SearchNetworksType,
  TableDataType,
  WargamingProjectsType,
} from 'types/data/DataTypes'
import {
  AuthorizedRoutesType,
  UnauthorizedRoutesType,
} from 'types/route/RouteTypes'
import Home from 'routes/Home'
import Login from 'routes/Login'
import NotFound from 'routes/NotFound'
import {
  DiscordSearchSuspense,
  InstagramSearchSuspense,
  TelegramSearchSuspense,
  VkFormalizationSuspense,
  VkSearchSuspense,
} from 'routes'

export const appTitle = [
  { pathname: '/home', title: 'Home' },
  { pathname: '/login', title: 'Authentication' },
  { pathname: '/network/search/vk', title: 'Search - Vk' },
  { pathname: '/network/search/telegram', title: 'Search - Telegram' },
  { pathname: '/network/search/discord', title: 'Search - Discord' },
  { pathname: '/network/search/instagram', title: 'Search - Instagram' },
  { pathname: '/network/formalization/vk', title: 'Formalization - Vk' },
] as AppTitleType[]

export const searchNetworks = [
  {
    link: '/network/search/vk',
    socialNetwork: 'Vk',
  },
  {
    link: '/network/search/telegram',
    socialNetwork: 'Telegram',
  },
  {
    link: '/network/search/discord',
    socialNetwork: 'Discord',
  },
  {
    link: '/network/search/instagram',
    socialNetwork: 'Instagram',
  },
] as SearchNetworksType[]

export const formalizationNetworks = [
  {
    link: '/network/formalization/vk',
    socialNetwork: 'Vk',
  },
] as FormalizationNetworksType[]

export const wargamingProjects = [
  {
    href: 'https://wargaming.com/ru/games/world-of-tanks',
    projectName: 'World of Tanks',
  },
  {
    href: 'https://wargaming.com/ru/games/world-of-warships',
    projectName: 'World of Warships',
  },
  {
    href: 'https://wargaming.com/ru/games/wows-blitz',
    projectName: 'World of Warships Blitz',
  },
  {
    href: 'https://wargaming.com/ru/games/world-of-warplanes',
    projectName: 'World of Warplanes',
  },
  {
    href: 'https://wargaming.com/ru/games/world-of-tanks-blitz',
    projectName: 'World of Tanks Blitz',
  },
  {
    href: 'https://wargaming.com/ru/games/world-of-tanks-console',
    projectName: 'World of Tanks (Xbox/PS5)',
  },
  {
    href: 'https://wargaming.com/ru/games/master-of-orion',
    projectName: 'Master of Orion',
  },
] as WargamingProjectsType[]

export const myContacts = [
  {
    href: 'https://t.me/web_front_dev',
    socialNetwork: 'Telegram',
  },
  {
    href: 'https://vk.com/id315800614',
    socialNetwork: 'Vk',
  },
  {
    href: 'http://www.facebook.com/profile.php?id=100014898465280',
    socialNetwork: 'Facebook',
  },
] as MyContactsType[]

export const authorizedMenuItems = [
  {
    link: '/login',
    Icon: CloseOutlined,
    title: 'Logout',
  },
  {
    link: '/home',
    Icon: HomeOutlined,
    title: 'Home',
  },
] as AuthorizedMenuItemsType[]

export const authorizedSubMenuItems = [
  {
    Icon: NetworkIcon,
    title: 'Social networks',
    Children: MenuNetworks,
  },
  {
    Icon: MenuOutlined,
    title: 'We project',
    Children: MenuWargamingProjects,
  },
  {
    Icon: GithubOutlined,
    title: 'My contacts',
    Children: MenuMyContacts,
  },
] as AuthorizedSubMenuItemsType[]

export const tableData = [
  {
    main: 'продаю, куплю, обмен, обменяю, раздача, прокачка, буст, магазин(премиум), shop',
    rare: 'продам, продажа, продается | покупаю, скупаю, купля, закупка | отдам, дам, отдача, раздам, раздаю, розыгрыш | поднятие статистики | маркет, рынок, аукцион',
    product:
      'ак, акк, акаунт, аккаунт | код, премиум/бонус-коды | читы | золото, голда',
    project: 'wot, world of tanks, ворлд оф танкс',
  },
] as TableDataType[]

export const breadcrumbData = {
  home: {
    path: '/',
    breadcrumbName: 'home',
    children: [
      {
        path: '/network/search/vk',
        breadcrumbName: 'Networks',
      },
    ],
  },
  network: {
    path: '/',
    breadcrumbName: 'network',
    children: [
      {
        path: '/network/search/vk',
        breadcrumbName: 'Search',
      },
      {
        path: '/network/formalization/vk',
        breadcrumbName: 'Formalization',
      },
    ],
  },
  formalization: {
    path: '/',
    breadcrumbName: 'formalization',
    children: [
      {
        path: '/network/formalization/vk',
        breadcrumbName: 'Vk',
      },
    ],
  },
  search: {
    path: '/',
    breadcrumbName: 'search',
    children: [
      {
        path: '/network/search/vk',
        breadcrumbName: 'Vk',
      },
      {
        path: '/network/search/telegram',
        breadcrumbName: 'Telegram',
      },
      {
        path: '/network/search/discord',
        breadcrumbName: 'Discord',
      },
      {
        path: '/network/search/instagram',
        breadcrumbName: 'Instagram',
      },
    ],
  },
} as BreadcrumbDataType

export const authorizedRoutes = [
  {
    path: '/',
    Element: Home,
    name: 'Home',
  },
  {
    path: '/home',
    Element: Home,
    name: 'Home',
  },
  {
    path: '/network/search/vk',
    Element: VkSearchSuspense,
    name: 'Vk Search',
  },
  {
    path: '/network/search/telegram',
    Element: TelegramSearchSuspense,
    name: 'Telegram Search',
  },
  {
    path: '/network/search/discord',
    Element: DiscordSearchSuspense,
    name: 'Discord Search',
  },
  {
    path: '/network/search/instagram',
    Element: InstagramSearchSuspense,
    name: 'Instagram Search',
  },
  {
    path: '/network/formalization/vk',
    Element: VkFormalizationSuspense,
    name: 'Vk Formalization',
  },
  {
    path: '*',
    Element: NotFound,
    name: 'Not Found',
  },
] as AuthorizedRoutesType[]

export const unauthorizedRoutes = [
  {
    path: '/login',
    Element: Login,
    name: 'Login',
  },
] as UnauthorizedRoutesType[]
