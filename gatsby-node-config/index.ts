import { resolve } from 'path';
import { GatsbyCreatePages, GatsbyOnCreatePage } from './types';
import { initialData } from '@src/state/todos';
import { Todo } from '@src/types';

export const createPages: GatsbyCreatePages<{ todo: Todo }> = async ({ actions }) => {
  const { createPage } = actions;
  initialData.forEach(todo => {
    createPage({
      path: `/todos/${todo.id}`,
      component: resolve(`./src/templates/todos.tsx`),
      context: {
        todo,
      },
    });
  });
};

export const onCreatePage: GatsbyOnCreatePage<{ todo: Todo }> = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/todos/)) {
    page.matchPath = '/todos/:id';
    createPage(page);
  }
};
