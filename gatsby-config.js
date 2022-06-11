module.exports = {
  siteMetadata: {
    title: `Afrika`,
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-plugin-react-helmet", "gatsby-transformer-sharp", {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `./data/`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options:{
      name: `Afrika`,
      short_name: `Afrika`,
      description: `Showcasing the beauty of africa.`,
      lang: `en`,
      display: `standalone`,
      icon: `src/images/africa.svg`,
    }
  },
  {
    resolve: `gatsby-remark-images`,
    options: {
      quality:90,
      maxWidth:900
    },
  },
  `gatsby-transformer-json`,
]  
};

