import React from "react"
import { graphql } from "gatsby"
export default function BlogPost({ data }) {
  const post = data.contentfulPageBlogPost
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  )
}
export const query = graphql`
  query ($slug: String!) {
    contentfulPageBlogPost(slug: { eq: $slug }) {
      title
    }
  }
`
