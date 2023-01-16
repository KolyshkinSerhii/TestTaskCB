import { configureStore } from '@reduxjs/toolkit'
import ArticleListReducer from './articlesListReducer'

// ...

const store = configureStore({
  reducer: {
    articles: ArticleListReducer
  },
})

export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U} ? U : never

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store