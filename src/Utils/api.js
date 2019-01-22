import axios from 'axios';

const BASE_URL = `https://north-coders-knews.herokuapp.com/api`
export const fetchTopics = async () => {
    const { data } = await axios.get(`${BASE_URL}/topics`)
    return data;
}

export const fetchArticles = async (page) => {
    const { data } = await axios.get(`${BASE_URL}/articles?page=${page}`)
    return data.articles;
}

export const fetchArticlesByTopic = async (slug) => {
    const { data } = await axios.get(`${BASE_URL}/topics/${slug}/articles`)
    return data.article;
}

export const fetchArticlesById = async (article_id) => {
    const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`)
    return data.articles;
}

export const fetchCommentsByArticleId = async (article_id) => {
    const { data } = await axios.get(`${BASE_URL}/articles/${article_id}/comments`)
    return data.comments;
}

export const fetchUsers = async (username) => {
    const { data } = await axios.get(`${BASE_URL}/users/${username}`)
    return data
}
export const handleDelete = async() = {
    const { data } = await axios.get(`${BASE_URL}/users/${username}`)
    return data
}

// export const fetchArticles = async (slug) => {
//     const URL = slug
//         ? `${BASE_URL}/topic/article`
//         : `${BASE_URL}/articles`
//     const { data } = await axios.get(`${BASE_URL}/articles`)
//     return data.articles
// }