import React from "react"
import { graphql } from "gatsby"
export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
    }
  }
`
