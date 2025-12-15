import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Check } from 'lucide-react'

import Image from 'next/image'

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
    <Card className='w-full overflow-hidden pt-0'>
      <div className='relative w-full h-[180px] sm:h-[200px]'>
        <Image
          src={item.img}
          alt={item.title}
          fill
          className='object-cover'
        />
      </div>

      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>

      <CardContent className='space-y-4 text-sm'>
        <ul className='space-y-3'>
          {item.keypoints.map(keypoint => (
            <li
              key={keypoint.subtitle}
              className='flex items-start gap-3'
            >
              <Check className='h-5 w-5 text-green-500 shrink-0 mt-1' />
              <p>
                <span className='font-bold'>
                  {keypoint.subtitle + ' '}
                </span>
                {keypoint.text}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
