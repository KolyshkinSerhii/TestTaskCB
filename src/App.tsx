import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import ArticleDetailedInfo from './components/ArticleDetailed';
import Articles from './components/Articles';
import { requestArticlesList } from './Redux/articlesListReducer';
import { useAppDispatch, useAppSelector } from './Redux/hooks';

function App() {

  const {articles} = useAppSelector(state => state.articles)
  const dispatch = useAppDispatch()

  useEffect( () => {
    dispatch(requestArticlesList())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/TestTaskCB/' element={<Articles articles={articles}/>} />
        <Route path='/TestTaskCB/ArticleDetailedInfo/:id' element={<ArticleDetailedInfo articles={articles}/>} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
