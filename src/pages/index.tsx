import Img from 'react-optimized-image'
import React from 'react'
import {BlogsByCategories} from '../components/BlogsByCategories'
import {FeaturedBlogs} from '../components/FeaturedBlogs'
import {getAllBlogsFrontmatter, getRawBlogsContent} from '../utils/blogs'
import {Layout} from '../components/Layout'

interface IndexProps {
  rawBlogsContent: string[] // array of raw string md blogs
  siteTitle: string
  siteDescription: string
}

const Index: React.FC<IndexProps> = ({siteTitle, siteDescription, rawBlogsContent}) => {
  const {
    allBlogs,
    featuredBlogs,
    announcementBlogs,
    customerStoriesBlogs,
    developerBlogs,
    eventsBlogs,
    productBlogs,
    thoughtleadershipBlogs,
  } = getAllBlogsFrontmatter(rawBlogsContent)

  return (
    <Layout title={siteTitle} description={siteDescription}>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div className="mx-2 pt-16">
            <h1 className="mb-4 font-extrabold text-gray-800">Blog</h1>
            <Img
              className="mb-16"
              src={require(`../../public/defaultImages/separator.png`)}
            />
            <FeaturedBlogs blogFrontmatter={featuredBlogs} />
          </div>
        </div>
      </div>
      <BlogsByCategories
        allBlogs={allBlogs}
        featuredBlogs={featuredBlogs}
        announcementBlogs={announcementBlogs}
        customerStoriesBlogs={customerStoriesBlogs}
        developerBlogs={developerBlogs}
        eventsBlogs={eventsBlogs}
        productBlogs={productBlogs}
        thoughtleadershipBlogs={thoughtleadershipBlogs}
      />
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  // Get site data to populate next/head
  const siteData = await import(`../../siteconfig.json`)

  // Get all blogs in raw format from filesystem
  const rawBlogsContent = getRawBlogsContent(require('fs'))

  return {
    props: {
      rawBlogsContent,
      siteTitle: siteData.default.title,
      siteDescription: siteData.default.description,
    },
  }
}
