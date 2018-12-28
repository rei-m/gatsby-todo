interface PageInput {
  path: string
  component: string
  layout?: string
  context?: any
  matchPath?: string
}

interface GatsbyActionCreators {
  createPage: (page: PageInput) => void
  deletePage: (page: PageInput) => void
  createRedirect: (
    opts: {
      fromPath: string
      isPermanent?: boolean
      redirectInBrowser?: boolean
      toPath: string
    }
  ) => void
}

export type GatsbyCreatePages = (
  fns: { graphql: any; actions: GatsbyActionCreators }
) => void

export type GatsbyOnCreatePage = (
  fns: { page: PageInput; actions: GatsbyActionCreators }
) => void
