import type { Metadata } from 'next'

type Props = {
  params: Promise<{ product: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await params

  // TODO: Cuando tengas datos reales, obtener info del producto desde la BD
  const productName = `Producto ${product}`

  return {
    title: `${productName} - Impresoras y Suministros`,
    description: `Detalles, especificaciones y precio de ${productName}. Disponible en Enter CT con envío a toda Colombia y soporte técnico garantizado.`,
    openGraph: {
      title: `${productName} | Enter CT`,
      description: `Compra ${productName} con garantía y soporte técnico. Envíos a toda Colombia.`,
      url: `https://enterct.com/products/${product}`,
      type: 'website'
    }
  }
}

export default async function ProductPage({ params }: Props) {
  const { product } = await params

  return (
    <main>
      <h1>Product: {product}</h1>
    </main>
  )
}