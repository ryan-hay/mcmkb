import NextLink from 'next/link'
import React from 'react'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="bg-black p-4 flex">
      <NextLink href="/">
        <p className="text-white text-3xl cursor-pointer">MCM Knowledge Base</p>
      </NextLink>
    </div>
  )
}
