import React, { ComponentType, FC, ReactNode, Suspense } from 'react'
import Preloader from 'components/Preloader'

type PropsType = {
  children?: ReactNode
}

export const withSuspense = (
  WrappedComponent: ComponentType
): ComponentType => {
  const Component: FC<PropsType> = (props: PropsType) => {
    return (
      <Suspense fallback={<Preloader />}>
        <WrappedComponent {...props} />
      </Suspense>
    )
  }

  return Component
}
