import React from 'react'
import Article from './Article'

import feedbeak from '../styles/article-list.module.css'

let ArticleList = ({articles}) => {
    const articleElements = articles.map((article) =>
        <li key={article.id} className={feedbeak.item}>
            <Article article={article}/>
        </li>
    )

    return (
        <ul className={feedbeak.list}>
            {articleElements}
        </ul>
    )
}

export default  ArticleList
