import axios from 'axios'
import Topics from '../Components/Topics';

const BASE_URL = `https://north-coders-knews.herokuapp.com/api`
export const fetchTopics = async () => {
    const { data } = await axios.get(`${BASE_URL}/topics`)
    return data
}

export const fetchArticles = async () => {
    const { data } = await axios.get(`${BASE_URL}/articles`)
    return data.articles
}

export const fetchArticlesByTopic = async (slug) => {
    const { data } = await axios.get(`${BASE_URL}/topics/${slug}/articles`)
    return data.article
}


// export const fetchArticles = async (slug) => {
//     const URL = slug
//         ? `${BASE_URL}/topic/article`
//         : `${BASE_URL}/articles`
//     const { data } = await axios.get(`${BASE_URL}/articles`)
//     return data.articles
// }