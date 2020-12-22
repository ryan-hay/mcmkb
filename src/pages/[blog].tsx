import BlogLayout from '../components/BlogLayout'
import gfm from 'remark-gfm'
import Img from 'react-optimized-image'
import matter from 'gray-matter'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import {GetStaticPaths, GetStaticProps} from 'next'
import {AuthorLarge, AuthorSmall} from '../components/Author'
import {BlogData} from '../types'
import {calculateReadingMins} from '../utils/blogs'
import {CodeBlock} from '../components/CodeBlock'
import {Footer} from '../components/Footer'
import {formatDate} from '../utils/formatDate'

const Blog = ({data, content}: BlogData) => {
  const frontmatter = data

  const approxReadMins = calculateReadingMins(content)

  return (
    <>
      <BlogLayout title={frontmatter.title} description={frontmatter.description}>
        <h1 className="mt-6 mb-12 text-5xl">{frontmatter.title}</h1>
        <div className="my-6 flex justify-between">
          <AuthorSmall author={frontmatter.author} date={formatDate(frontmatter.date)} />
          <div className="">
            <p>{`☕️ ${approxReadMins} minute read`}</p>
          </div>
        </div>
        <div className="markdown-body mb-12">
          <ReactMarkdown
            plugins={[gfm]}
            source={content}
            renderers={{
              code: CodeBlock,
              image: (props: any) => {
                const {src, alt} = props

                // If image source is pointing to an external URL
                if ((src as string).includes('https://')) {
                  return <img src={src} alt={alt} />
                } else {
                  // image source is pointing to a locally hosted image
                  // Need to convert the image path from relative in the MD to relative of this file
                  // strip ./assets and surrounding quotes
                  const imageName = src.replace('./assets', '').replace(/'/g, '')
                  return (
                    <Img
                      src={require(`../content/${data.slug}/assets${imageName}`)}
                      alt={alt}
                      webp
                      sizes={[400, 800]}
                    />
                  )
                }
              },
            }}
            escapeHtml={false}
          />
        </div>
        <div className="separator"></div>
        <AuthorLarge author={frontmatter.author} />
      </BlogLayout>
      <Footer />
    </>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async ({params}) => {
  const blog = params?.blog

  const content = await import(`../content/${blog}/${blog}.md`)
  const blogData: BlogData = matter(content.default) as any

  const formattedBlogData = {
    ...blogData.data,
    // Date field must be serializable
    date: blogData.data.date.toJSON(),
  }

  return {
    props: {
      data: formattedBlogData,
      content: blogData.content,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const fs = require('fs')

  // Call [blog].tsx for each blog file in the content directory

  // Get array of filenames in content dir
  const files: string[] = fs.readdirSync(`${process.cwd()}/src/content`, 'utf-8')

  const blogDirNames = files.filter(blogDirName => blogDirName)

  const paths = blogDirNames.map(blogDir => ({
    params: {blog: blogDir},
  }))

  return {
    paths,
    fallback: false,
  }
}
