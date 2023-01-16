import Axios from 'axios';

export const instance = Axios.create({
    headers: {

    },
    baseURL: "https://api.spaceflightnewsapi.net/v3"
})

// API for Articles

export const ArticlesList = {
    getArticlesList() {
        return instance.get(`/articles`).then(res => {
            return res.data
        })
    },
}