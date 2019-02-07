import React, {PureComponent} from 'react'
import comments from '../constants/comments'

import button from '../styles/btn.module.css'
import paper from '../styles/article-list.module.css'
import view from '../styles/comment-list.module.css'

let CheckComments = id => {
    let CommentArr = [];
    comments.forEach(function(comment) {
        if (comment.article_id === id)
            CommentArr.push(
                <li key={comment.id} className={view.comment}>
                    <section className={view.test}>
                        <h2 className={view.autor}> {comment.autor}</h2>
                        <p>{comment.comment} </p>
                    </section>
                </li>)
    })

    return <ul>{CommentArr}</ul>
}

class Article extends PureComponent {

    state = {
        isOpen: false,
        hovered: false
    }

    onMouseEnter = e => {
        this.setState({ hovered: true });
    };

    onMouseLeave = e => {
        this.setState({ hovered: false });
    };

    render() {
        const {article} = this.props
        const { hovered } = this.state;
        const hover_autor = hovered ? { backgroundColor: "#c5d3ea", color: "#041e42" } : {};
        return (
            <div>
                <section>
                    <div>
                        <h2 className={paper.autor} onClick={this.handleClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>{article.title}</h2>
                    </div>
                    <div>
                        <section className={paper.article}>{article.text}</section>
                    </div>
                </section>
                    <button style={hover_autor} onClick={this.handleClick} className={this.state.isOpen ? (button.open) : (button.close)}>
                        {this.state.isOpen ? 'скрыть комментарии' : 'показать комментарии'}
                    </button>
                <div>
                    {this.state.isOpen &&
                        <section >
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
