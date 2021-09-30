module.exports = {
  siteMetadata: {
    siteUrl: "https://gatbsy.alieslam.tech/",
    title: "My First Gatsby Site",
    description: "My First Gatsby GraphQL Query",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
