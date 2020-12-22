import Img from 'react-optimized-image'
import React from 'react'

interface AuthorSmallProps {
  author: string
  date: string
}
interface AuthorLargeProps {
  author: string
}

export const AuthorSmall: React.FC<AuthorSmallProps> = ({author, date}) => {
  const profilepic = author.replace(' ', '').toLowerCase()

  return (
    <div className="author flex">
      <Img
        src={require(`../../public/profilepics/${profilepic}.jpg`)}
        alt="Profile Picture"
        webp
        sizes={[400]}
        className="rounded-full h-12 w-12"
      />
      <div className="flex flex-col ml-4">
        <div className="text-base">{author}</div>
        <div className="text-base text-gray-400">{date}</div>
      </div>
    </div>
  )
}

export const AuthorLarge: React.FC<AuthorLargeProps> = ({author}) => {
  const profilepic = author.replace(' ', '').toLowerCase()

  return (
    <div className="author flex justify-center mt-16">
      <Img
        src={require(`../../public/profilepics/${profilepic}.jpg`)}
        alt="Profile Picture"
        webp
        sizes={[400]}
        className="rounded-full h-24 w-24"
      />
      <div className="flex flex-col ml-4">
        <p className="text-gray-300 text-base">WRITTEN BY</p>
        <div className="text-base font-semibold text-3xl">{author}</div>
      </div>
    </div>
  )
}
