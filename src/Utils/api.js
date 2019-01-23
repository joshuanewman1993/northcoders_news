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

export const handleDelete = async (article_id, comment_id) => {
    const { data } = await axios.delete(`${BASE_URL}/articles/${article_id}/comments/${comment_id}`)
    return data
}
export const addComment = async (article_id, username, body) => {
    const { data } = await axios.post(`${BASE_URL}/articles/${article_id}/comments`, {
        body: JSON.stringify({
            username: username,
            body: body
        })
    })
}

export const deleteArticle = async (article_id) => {
    const { data } = await axios.delete(`${BASE_URL}/articles/${article_id}`)
    return data;
}

export const addTopic = async (description, slug) => {
    const { data } = await axios.post(`${BASE_URL}/topics`, {
        slug: slug,
        description: description
    })
}

export const patchArticleVote = async (article_id, direction) => {
    const { data } = await axios.patch(`${BASE_URL}/articles/${article_id}`,
        { inc_votes: direction })
    return data.article
}
// export const fetchArticles = async (slug) => {
//     const URL = slug
//         ? `${BASE_URL}/topic/article`
//         : `${BASE_URL}/articles`
//     const { data } = await axios.get(`${BASE_URL}/articles`)
//     return data.articles
// }