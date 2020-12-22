import Link from 'next/link'
import React from 'react'
import {BlogFrontmatter} from '../types'
import {formatBlogTags, sortBlogFrontmatterByNewestDate} from '../utils/blogs'
import {formatDate} from '../utils/formatDate'
import {HeroImage} from './HeroImage'

interface BlogListProps {
  blogFrontmatter: BlogFrontmatter[]
}

export const BlogList: React.FC<BlogListProps> = ({blogFrontmatter}) => {
  const sortedBlogFrontmatter = sortBlogFrontmatterByNewestDate(blogFrontmatter)

  return (
    <ul className="my-12">
      {sortedBlogFrontmatter.map((blog: BlogFrontmatter) => (
        <Link href={`/${blog.slug}`}>
          <li
            key={blog.title}
            className={
              'flex flex-wrap mb-16 lg:flex-nowrap lg:p-2 cursor-pointer hover:bg-gray-50 group'
            }
          >
            <div className="order-1 flex-grow mb-4 lg:order-2 lg:w-1/4">
              <HeroImage blogSlug={blog.slug} heroImageName={blog.heroImageName} />
            </div>
            <div className="flex flex-col order-2 lg:order-1 lg:w-3/4 lg:mr-12">
              <a className="mb-6 text-gray-700 font-semibold text-3xl group-hover:underline">
                {blog.title}
              </a>
              <p className="mb-4">{blog.description}</p>
              <p className="mb-4 font-medium text-blue-800">
                {formatBlogTags(blog.tags)}
              </p>
              <p className="">
                By <span className="font-bold">{blog.author}</span> |{' '}
                {formatDate(blog.date)}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}
