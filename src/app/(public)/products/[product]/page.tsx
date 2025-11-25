export default async function product ({ params }: { params: Promise<{ product: string }> } ) {
  const { product } = await params

  console.log({ product })
  
  return (
    <main>
      <h1>Product: {product}</h1>
    </main>
  )
}
