import { ThunkAction } from "@reduxjs/toolkit"
import { ArticlesList } from "../API/API"
import { InferActionsType, RootState } from "./store"


export type ArticleType = {
  id: string,
  title: string,
  imageUrl: string,
  summary: string,
  publishedAt: string
}

const initialState = {
  articles: [] as Array<ArticleType>
}

export type InitialStateType = typeof initialState

const ArticleListReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {

      case 'SET-ARTICLES':
          return {
              ...state, articles: action.payload
          };
      default:
          return state
  }
}

type ActionTypes = InferActionsType<typeof actions>

export const actions = {
    setArtilcesAC: (articles: Array<ArticleType>) => ({
        type: 'SET-ARTICLES',
        payload: articles
    } as const),
}

export const requestArticlesList = (): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
  let data = await ArticlesList.getArticlesList()

  if(data.code === 0) {
    throw new Error(data.message)
  }

  dispatch(actions.setArtilcesAC(data))
}

export default ArticleListReducer