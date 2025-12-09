/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect } from 'react'

export function SubscribeUser() {
  useEffect(() => {
    async function subscribe() {
      const permission = await Notification.requestPermission()
      if (permission !== 'granted') {
        alert('Debes aceptar notificaciones para suscribirte')
        return
      }

      const reg = await navigator.serviceWorker.ready

      const subscription = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
        )
      })

      await fetch('/api/save-notifications-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscription)
      })

      alert('Suscripcion guardada correctamente')
    }

    subscribe().catch(err => console.error('Error suscribiendo: ', err))
  }, [])

  return null
}

function urlBase64ToUint8Array(base64String: any) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}
