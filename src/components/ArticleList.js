import React from 'react'
import Article from './Article'

import paper from '../styles/article-list.module.css'

let ArticleList = ({articles}) => {
    const articleElements = articles.map((article) =>
        <li key={article.id} className={paper.item}>
            <Article article={article}/>
        </li>
    )

    return (
        <ul className={paper.list}>
            {articleElements}
        </ul>
    )
}

export default  ArticleList
