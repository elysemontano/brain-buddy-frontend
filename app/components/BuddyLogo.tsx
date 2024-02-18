import React from 'react'
import Image from 'next/image'

type ImageProps = {
  height: number
  width: number
}

export default function BuddyLogo({ height, width}: ImageProps) {
  return (
    <section className=''>
      <Image 
        src="/images/brain-buddy-logo.png"
        width={width}
        height={height}
        alt="Brain Buddy"
        priority={true}
      />
    </section>
  )
}
