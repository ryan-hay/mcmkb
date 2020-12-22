import NextLink from 'next/link'
import React from 'react'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="bg-black p-4">
      <div className="container mx-auto">
        <NextLink href="/">
          <div className="flex items-end">
            <p className="text-white text-3xl cursor-pointer mr-6">IBM MCM SWAT</p>
            <p className="text-white text-2xl cursor-pointer">Knowledge Base</p>
          </div>
        </NextLink>
      </div>
    </div>
  )
}
