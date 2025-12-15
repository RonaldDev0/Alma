import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

// import Image from 'next/image'

export type IData = {
  img: string
  title: string
  description: string
  keypoints: {
    subtitle: string
    text: string
  }[]
}

export function CardInformation({ item }: { item: IData }) {
  return (
    <Card className='w-full'>
      <CardHeader>
        {/* <Image
          src={item.img}
          alt={item.title}
          width={200}
          height={200}
        /> */}
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
    </Card>
  )
}