'use client'

import { createContext, useCallback, useContext, useState } from 'react'

type SubscriptionContextValue = {
  subscriptions: string[]
  toggleSubscription: (coinId: string) => void
}

const SubscriptionContext = createContext<SubscriptionContextValue | null>(null)

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const [subscriptions, setSubscriptions] = useState<string[]>([])

  const toggleSubscription = useCallback((coinId: string) => {
    setSubscriptions((current) =>
      current.includes(coinId)
        ? current.filter((id) => id !== coinId)
        : [...current, coinId],
    )
  }, [])

  return (
    <SubscriptionContext.Provider value={{ subscriptions, toggleSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  )
}

export function useSubscriptions() {
  const value = useContext(SubscriptionContext)
  if (!value) throw new Error('useSubscriptions must be used within SubscriptionProvider')
  return value
}
