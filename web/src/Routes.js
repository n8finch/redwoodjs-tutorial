// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
      <Route path="/books/new" page={NewBookPage} name="newBook" />
      <Route path="/books/{id}/edit" page={EditBookPage} name="editBook" />
      <Route path="/books/{id}" page={BookPage} name="book" />
      <Route path="/books" page={BooksPage} name="books" />
      <Route path="/journals/new" page={NewJournalPage} name="newJournal" />
      <Route
        path="/journals/{id}/edit"
        page={EditJournalPage}
        name="editJournal"
      />
      <Route path="/journals/{id}" page={JournalPage} name="journal" />
      <Route path="/journals" page={JournalsPage} name="journals" />
      <Route path="/posts/new" page={NewPostPage} name="newPost" />
      <Route path="/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
      <Route path="/posts/{id:Int}" page={PostPage} name="post" />
      <Route path="/posts" page={PostsPage} name="posts" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
