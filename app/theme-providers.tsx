'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState } from 'react'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setTheme('light')
    setMounted(true)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme={'dark'} enableSystem>
      {children}
    </ThemeProvider>
  )
}
