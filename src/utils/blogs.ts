import matter from 'gray-matter'
import {BlogData, Category} from '../types'
import {BlogFrontmatter} from '../types'

export const getAllBlogsFrontmatter = (rawBlogsContent: string[]) => {
  const blogs: BlogData[] = rawBlogsContent.map(blog => matter(blog)) as any
  const allBlogsFrontmatter = blogs.map(blog => blog.data)

  // sort the blogs frontmatter from newest to oldest
  const sortedBlogFrontmatter = sortBlogFrontmatterByNewestDate(allBlogsFrontmatter)

  const {
    customerStoriesBlogs,
    developerBlogs,
    thoughtleadershipBlogs,
    eventsBlogs,
    productBlogs,
    announcementBlogs,
    featuredBlogs,
  } = sortBlogsByCategory(sortedBlogFrontmatter)

  return {
    allBlogs: sortedBlogFrontmatter,
    customerStoriesBlogs,
    developerBlogs,
    thoughtleadershipBlogs,
    eventsBlogs,
    productBlogs,
    announcementBlogs,
    featuredBlogs,
  }
}

export const sortBlogFrontmatterByNewestDate = (blogs: BlogFrontmatter[]) => {
  blogs.sort(function (a: BlogFrontmatter, b: BlogFrontmatter) {
    const dateA = new Date(a.date) as any
    const dateB = new Date(b.date) as any
    return dateB - dateA
  })

  return blogs
}

export const sortBlogsByCategory = (sortedBlogFrontmatter: BlogFrontmatter[]) => {
  const blogsByCategories: {[key in Category]: BlogFrontmatter[]} = {
    customerstories: [],
    developer: [],
    thoughtleadership: [],
    events: [],
    product: [],
    announcement: [],
    featured: [],
  }

  sortedBlogFrontmatter.forEach(blogFrontmatter => {
    // Category string manipulation
    // Remove spaces, make lowercase and split categories by comma
    const noSpaceCategories = blogFrontmatter.categories.replace(/ /g, '').toLowerCase()
    const categories = noSpaceCategories.split(',')

    // push the blog into each categories array
    categories.forEach(category => {
      ;(blogsByCategories as any)[category].push(blogFrontmatter)
      return
    })
  })

  return {
    customerStoriesBlogs: blogsByCategories.customerstories,
    developerBlogs: blogsByCategories.developer,
    thoughtleadershipBlogs: blogsByCategories.thoughtleadership,
    eventsBlogs: blogsByCategories.events,
    productBlogs: blogsByCategories.product,
    announcementBlogs: blogsByCategories.announcement,
    featuredBlogs: blogsByCategories.featured,
  }
}

export const getRawBlogsContent = (fs: any) => {
  // Get array of filenames in content dir
  const blogs: string[] = fs.readdirSync(`${process.cwd()}/src/content`, 'utf-8')

  return blogs.map(blog => {
    const path = `${process.cwd()}/src/content/${blog}/${blog}.md`
    // get the content of the blog post
    const rawContent: string = fs.readFileSync(path, {
      encoding: 'utf-8',
    })

    return rawContent
  })
}

export const formatBlogTags = (tagString: string) => {
  if (tagString?.length > 0) {
    const noSpaceTags = tagString.replace(/ /g, '').toLowerCase()
    const tags = noSpaceTags.split(',')
    const hashSymbolTags = tags.map(tag => `#${tag}`)
    return hashSymbolTags.join(' ')
  }
  return
}

export const calculateReadingMins = (str: string) => {
  if (str.length < 1) {
    return '1'
  }

  const words = []
  str.replace(/[A-Z]+/gi, (m: any) => words.push(m) as any)
  const num = words.length / 250
  // toFixed returns string
  const readTimeEstimate = num.toFixed(0)

  return readTimeEstimate === '0' ? '1' : readTimeEstimate
}
