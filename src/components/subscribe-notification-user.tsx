/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect } from 'react'
import { useUserStore, selectUser, selectUserLoading } from '@/store/user'

export function SubscribeUser() {
  const user = useUserStore(selectUser)
  const loading = useUserStore(selectUserLoading)

  useEffect(() => {
    if (loading) return
  
    async function subscribe() {
      try {
        const permission = await Notification.requestPermission()
        if (permission !== 'granted') {
          console.warn('Permiso no concedido')
          return
        }
  
        const reg = await navigator.serviceWorker.ready
        let subscription = await reg.pushManager.getSubscription()
  
        if (!subscription) {
          const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
          if (!vapidKey) {
            throw new Error('VAPID key no encontrada')
          }
  
          console.log('Creando suscripción...')
          subscription = await reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(vapidKey)
          })
          console.log('✅ Suscripción creada')
        } else {
          console.log('✅ Ya existe suscripción, reutilizando')
        }
  
        const response = await fetch('/api/save-notifications-subscription', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: user?.id,
            subscription
          })
        })
  
        if (!response.ok) {
          throw new Error(`Error guardando: ${response.status}`)
        }
  
        console.log('✅ Suscripción guardada/actualizada en backend')
  
      } catch (err) {
        console.error('❌ Error:', err)
      }
    }
  
    subscribe()
  }, [loading, user?.id])

  return null
}

function urlBase64ToUint8Array(base64String: any) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')
  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}
