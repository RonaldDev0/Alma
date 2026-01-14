'use client'
import { useEffect, useState } from 'react'

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = e => {
      e.preventDefault()
      setDeferredPrompt(e)
      setVisible(true)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()

    const result = await deferredPrompt.userChoice
    console.log('Resultado instalación:', result.outcome)

    setDeferredPrompt(null)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className='fixed bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:top-20 md:translate-x-0 w-[90%] max-w-sm bg-white shadow-lg rounded-xl p-4 z-50 animate-slideUp'>
      <div className='flex items-center gap-3'>
        <span className='flex-1 text-sm font-medium'>
          Instala esta aplicación
        </span>

        <button
          onClick={handleInstall}
          className='bg-blue-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-blue-700 transition'
        >
          Instalar
        </button>

        <button
          onClick={() => setVisible(false)}
          className='text-gray-500 hover:text-gray-700 text-lg leading-none'
        >
          ✕
        </button>
      </div>
    </div>
  )
}
