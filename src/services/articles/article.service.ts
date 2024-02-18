import baseServiceApi from "../fetch.service"


const api = 'pages/?type=blog.Post&order=-published_at&fields=cover_portrait_thumbnail,cover_portrait,cover_portrait_thumbnail,cover_thumbnail,cover,topics,url,alt_title,is_sponsored,views,insightful,intro,published_at,base64_blur_cover_thumbnail'

export const getArticles = (): Promise<void> => {
    return baseServiceApi(api, "GET");
}