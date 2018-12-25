/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import path from 'path';
// const initialData = require('./src/state/todos')

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql }) => {
  const datum = [ "pikachu", "charizard", "squirtle" ];

  // see https://gist.github.com/clarkdave/53cc050fa58d9a70418f8a76982dd6c8

  // ここからやるぞ

  // datum.forEach(name => {
  //   console.log(name);
  //   actions.createPage({
  //     path: `/todo/${name}`,
  //     component: path.resolve(`./src/templates/todo-detail.tsx`),
  //     context: {
  //       name,
  //     },
  //   })
  // })
  const name = datum[0];
  actions.createPage({
    path: `/todo/${name}`,
    component: path.resolve(`./src/templates/todo-detail.tsx`),
    context: {
      name,
    },
  })
}

// exports.onCreateNode = ({ node }) => {
//   console.log(node.internal.type);
//   console.log('あれ、そういうこと？？')
// }

// // Implement the Gatsby API “onCreatePage”. This is
// // called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/todo/)) {
//     page.matchPath = "/todo/*/"
//     console.log(page)
//     // Update the page.
//     createPage(page)
//   }
// }
