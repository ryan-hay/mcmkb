import gfm from 'remark-gfm'
import Img from 'react-optimized-image'
import Layout from '../components/Layout'
import matter from 'gray-matter'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import {GetStaticPaths, GetStaticProps} from 'next'
import {CodeBlock} from '../components/CodeBlock'

interface BlogProps {
  data: any
  content: any
}

const Blog = ({data, content}: BlogProps) => {
  const frontmatter = data

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
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
    </Layout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async ({params}) => {
  const blog = params?.blog
  // const blog = 'blog-one'

  const content = await import(`../content/${blog}/${blog}.md`)
  const data = matter(content.default)

  return {
    props: {
      data: data.data,
      content: data.content,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const fs = require('fs')

  // Get array of filenames in content dir
  const files: string[] = fs.readdirSync(`${process.cwd()}/src/content`, 'utf-8')

  // Filter filenames for only markdown files
  const blogDirs = files.filter(blogDirName => blogDirName)

  const paths = blogDirs.map(blogDir => ({
    params: {blog: blogDir},
  }))

  return {
    paths,
    fallback: false,
  }
}
