export type Category =
  | 'customerstories'
  | 'developer'
  | 'thoughtleadership'
  | 'events'
  | 'product'
  | 'announcement'
  | 'featured'

// type categoryFormatted =
//   | 'Customer Stories'
//   | 'Developer'
//   | 'Thought Leadership'
//   | 'Events'
//   | 'Product'
//   | 'Announcement'

export interface BlogFrontmatter {
  slug: string
  title: string
  author: string
  description: string
  date: Date
  tags: string
  categories: string
  heroImageName: string
}

export interface BlogData {
  content: string
  isEmpty: boolean
  orig: Buffer
  excerpt: string
  data: BlogFrontmatter
}

export interface SiteConfig {
  title: string
  description: string
}
