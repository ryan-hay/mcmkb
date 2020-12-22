import NextLink from 'next/link'
import React from 'react'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="bg-black h-96 p-4 mt-32">
      <div className="container mx-auto">
        <NextLink href="/">
          <p className="text-white">Footer Content</p>
        </NextLink>
      </div>
    </div>
  )
}
