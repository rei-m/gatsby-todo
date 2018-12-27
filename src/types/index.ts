import { RouteComponentProps } from "@reach/router";

export type StaticPageComponentProps<T = {}> = {
  pageContext: T;
} & RouteComponentProps<T>

export interface Todo {
  readonly id: number;
  readonly text: string;
  readonly completed: boolean;
}
