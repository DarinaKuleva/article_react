import React, {PureComponent} from 'react'
import comments from '../constants/comments'

let CheckComments = id => {
    let CommentArr = [];
    comments.forEach(function(comment) {
        if (comment.article_id === id)
            CommentArr.push(
                <li key={comment.id}>
                    <section>
                        <h2> {comment.autor}</h2>
                        <p>{comment.comment} </p>
                    </section>
                </li>)
    })

    return <ul>{CommentArr}</ul>
}

class Article extends PureComponent {

    state = {
        isOpen: false
    }

    render() {
        const {article} = this.props
        return (
            <div>
                <div>
                    <h2>{article.title}</h2>
                </div>
                <div>
                    <section>{article.text}</section>
                </div>
                <h2>
                    Комментарий
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                <div>
                    {this.state.isOpen &&
                        <section>
                            {CheckComments(article.id)}
                        </section>
                    }
                </div>
            </div>
    )
    }

    handleClick = (setState) => {
        this.setState (
            {isOpen: !this.state.isOpen}
        )
    }
}

export default Article
