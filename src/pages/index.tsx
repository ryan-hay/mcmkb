import Layout from '../components/Layout'
import Link from 'next/link'
import matter from 'gray-matter'
import React from 'react'

interface IndexProps {
  data: string[] // array of md blogs in string format
  title: string
  description?: string
}

const Index: React.FC<IndexProps> = ({title, data}) => {
  const blogData = data.map(blog => matter(blog))
  const blogFrontMatter = blogData.map(listItem => listItem.data)

  return (
    <Layout title={title}>
      <h1 className="mb-12">Articles</h1>
      <div>
        <ul>
          {blogFrontMatter.map((blog, i) => (
            <li key={i} className="mb-12">
              <Link href={`/${blog.slug}`}>
                <a className="text-lg">{blog.title}</a>
              </Link>
              <p>{blog.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const siteData = await import(`../../siteconfig.json`)
  const fs = require('fs')

  // Get array of filenames in content dir
  const files: string[] = fs.readdirSync(`${process.cwd()}/src/content`, 'utf-8')

  // Filter filenames for only markdown files
  const blogs = files.filter(filename => filename)

  const data = blogs.map(blog => {
    const path = `${process.cwd()}/src/content/${blog}/${blog}.md`
    // get the content of the blog post
    const rawContent: string = fs.readFileSync(path, {
      encoding: 'utf-8',
    })

    return rawContent
  })

  return {
    props: {
      data: data,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  }
}
