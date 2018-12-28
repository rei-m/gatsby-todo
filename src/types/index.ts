import { RouteComponentProps } from "@reach/router";

export interface SiteMetaData {
  readonly title: string;
  readonly description: string;
  readonly author: string;
}

export type GeneratedPageComponentProps<T = {}> = {
  pageContext: T;
} & RouteComponentProps<T>

export interface Todo {
  readonly id: number;
  readonly text: string;
  readonly completed: boolean;
}
