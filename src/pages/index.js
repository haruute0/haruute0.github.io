import React from 'react'

const mediumCDNUrl = `https://cdn-images-1.medium.com/max/300/`
const mediumURL = `https://medium.com/@haruute`

const IndexPage = ({ data }) => {
  const posts = data.allMediumPost.edges

  return (
    <main>
      {posts.map(post => (
        <article key={post.node.id}>
          <h3>
            {post.node.firstPublishedAt} |{' '}
            <a href={`${mediumURL}/${post.node.uniqueSlug}`}>
              {post.node.title}
            </a>
          </h3>
          <h4>by {post.node.author.name}</h4>
          <img
            src={`${mediumCDNUrl}/${post.node.virtuals.previewImage.imageId}`}
            alt={post.node.title}
            width="150"
          />
        </article>
      ))}
    </main>
  )
}

IndexPage.propTypes

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          firstPublishedAt
          author {
            name
          }
          virtuals {
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`
