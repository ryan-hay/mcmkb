import React from 'react'
import {Tab, Tabs} from 'carbon-components-react'
import {BlogFrontmatter} from '../types'
import {BlogList} from './BlogList'

interface BlogsByCategoriesProps {
  allBlogs: BlogFrontmatter[]
  featuredBlogs: BlogFrontmatter[]
  announcementBlogs: BlogFrontmatter[]
  customerStoriesBlogs: BlogFrontmatter[]
  developerBlogs: BlogFrontmatter[]
  eventsBlogs: BlogFrontmatter[]
  productBlogs: BlogFrontmatter[]
  thoughtleadershipBlogs: BlogFrontmatter[]
}

export const BlogsByCategories: React.FC<BlogsByCategoriesProps> = props => {
  return (
    <div className="container mx-auto my-16">
      <Tabs>
        <Tab id="tab-1" label="All Categories">
          <div className="some-content">
            <BlogList blogFrontmatter={props.allBlogs} />
          </div>
        </Tab>
        <Tab id="tab-2" label="Customer Stories">
          <div className="some-content">
            <BlogList blogFrontmatter={props.customerStoriesBlogs} />
          </div>
        </Tab>
        <Tab id="tab-2" label="Developer">
          <div className="some-content">
            <BlogList blogFrontmatter={props.developerBlogs} />
          </div>
        </Tab>
        <Tab id="tab-2" label="Thought Leadership">
          <div className="some-content">
            <BlogList blogFrontmatter={props.thoughtleadershipBlogs} />
          </div>
        </Tab>
        <Tab id="tab-2" label="Events">
          <div className="some-content">
            <BlogList blogFrontmatter={props.eventsBlogs} />
          </div>
        </Tab>
        <Tab id="tab-2" label="Product">
          <div className="some-content">
            <BlogList blogFrontmatter={props.productBlogs} />
          </div>
        </Tab>
        <Tab id="tab-3" label="Announcements">
          <div className="some-content">
            <BlogList blogFrontmatter={props.announcementBlogs} />
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}
