interface PageInput<T> {
  path: string;
  component: string;
  layout?: string;
  context?: T;
  matchPath?: string;
}

interface GatsbyActionCreators<T> {
  createPage: (page: PageInput<T>) => void;
  deletePage: (page: PageInput<T>) => void;
  createRedirect: (
    opts: {
      fromPath: string;
      isPermanent?: boolean;
      redirectInBrowser?: boolean;
      toPath: string;
    }
  ) => void;
}

export type GatsbyCreatePages<T> = (fns: { graphql: string; actions: GatsbyActionCreators<T> }) => void;

export type GatsbyOnCreatePage<T> = (fns: { page: PageInput<T>; actions: GatsbyActionCreators<T> }) => void;
