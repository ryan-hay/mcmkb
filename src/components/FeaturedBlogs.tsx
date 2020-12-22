import Link from 'next/link'
import React from 'react'
import {Button} from 'carbon-components-react'
import {BlogFrontmatter} from '../types'
import {formatBlogTags} from '../utils/blogs'
import {formatDate} from '../utils/formatDate'
import {HeroImage} from './HeroImage'

interface FeaturedProps {
  blogFrontmatter: BlogFrontmatter
}

const PrimaryFeatured = ({blogFrontmatter: blog}: FeaturedProps) => {
  return (
    <li key={blog.title} className={'flex flex-wrap mb-16 lg:flex-nowrap lg:px-2'}>
      <div className="order-1 flex-grow mb-4 lg:order-2 lg:w-3/6">
        <HeroImage blogSlug={blog.slug} heroImageName={blog.heroImageName} />
      </div>
      <div className="flex-col order-2 lg:order-1 lg:w-3/6 lg:mr-12">
        <Link href={`/${blog.slug}`}>
          <a className="mb-6 text-gray-700 font-semibold text-3xl">{blog.title}</a>
        </Link>
        <p className="my-4">{blog.description}</p>
        <p className="mb-4 font-medium text-green-800">{formatBlogTags(blog.tags)}</p>
        <p className="">
          By <span className="font-bold">{blog.author}</span> | {formatDate(blog.date)}
        </p>
        <div className="mt-8">
          <Link href={`/${blog.slug}`}>
            <Button>Read Now</Button>
          </Link>
        </div>
      </div>
    </li>
  )
}

const SecondaryFeatured = ({blogFrontmatter: blog}: FeaturedProps) => {
  return (
    <li key={blog.title} className={'flex flex-col mb-16 lg:w-2/6 lg:px-2'}>
      <div className="flex mb-4 lg:h-52 overflow-hidden">
        <HeroImage blogSlug={blog.slug} heroImageName={blog.heroImageName} />
      </div>
      <Link href={`/${blog.slug}`}>
        <a className="mb-6 text-gray-700 font-semibold text-3xl">{blog.title}</a>
      </Link>
      <p className="mb-4 flex-grow">{blog.description}</p>
      <p className="mb-4 font-medium text-green-800">{formatBlogTags(blog.tags)}</p>
      <p className="">
        By <span className="font-bold">{blog.author}</span> | {formatDate(blog.date)}
      </p>
      <div className="mt-8">
        <Link href={`/${blog.slug}`}>
          <Button>Read Now</Button>
        </Link>
      </div>
    </li>
  )
}

interface BlogListFeaturedProps {
  blogFrontmatter: BlogFrontmatter[]
}

export const FeaturedBlogs: React.FC<BlogListFeaturedProps> = ({blogFrontmatter}) => {
  return (
    <div>
      <ul className="flex flex-wrap">
        {blogFrontmatter.map((blog: BlogFrontmatter, i: any) => (
          <>
            {i === 0 ? (
              <PrimaryFeatured blogFrontmatter={blog} />
            ) : (
              <SecondaryFeatured blogFrontmatter={blog} />
            )}
          </>
        ))}
      </ul>
    </div>
  )
}
