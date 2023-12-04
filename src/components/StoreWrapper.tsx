'use client'

import { store } from '@/app/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

const StoreWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <div>{children}</div>
    </Provider>
  )
}

export default StoreWrapper
