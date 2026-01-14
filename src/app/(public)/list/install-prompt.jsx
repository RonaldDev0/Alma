'use client'
import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

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
    <Card className='fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-4 md:top-20 md:translate-x-0 w-[90%] max-w-md z-50 animate-slideUp p-4 flex items-center flex-row'>
      <p className='text-sm flex-1'>
        Mantenga actualizada su lista de precios.
        <span className='ml-1 font-bold'>Instale esta aplicación</span>
      </p>

      <div className='flex justify-center items-center'>
        <Button onClick={handleInstall}>
          Instalar
        </Button>

        <Button
          onClick={() => setVisible(false)}
          variant='ghost'
          size='sm'
          className='p-0'
          aria-label='Cerrar'
        >
          <X />
        </Button>
      </div>
    </Card>
  )
}
