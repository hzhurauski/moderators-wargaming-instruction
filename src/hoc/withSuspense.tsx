import React, { Suspense } from 'react'
import Preloader from 'components/Preloader'

export const withSuspense = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    return (
      <Suspense fallback={<Preloader />}>
        <WrappedComponent {...props} />
      </Suspense>
    )
  }
}
