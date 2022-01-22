import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { withSuspense } from 'hoc/withSuspense'
import { lazy } from 'react'

const Suspense = (assignment: string, network: string) => {
  return withAuthRedirect(
    withSuspense(lazy(() => import(`routes/networks/${assignment}/${network}`)))
  )
}

export const VkSearchSuspense = Suspense('search', 'Vk')
export const TelegramSearchSuspense = Suspense('search', 'Telegram')
export const DiscordSearchSuspense = Suspense('search', 'Discord')
export const InstagramSearchSuspense = Suspense('search', 'Instagram')

export const VkFormalizationSuspense = Suspense('formalization', 'Vk')
