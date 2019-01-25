import React, {Component} from 'react'


class Result extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.handleClick = handleClick.bind(this)
    }
    render() {
        const {result} = this.props
        const body = <section>{result.text}</section>
        const body_com = this.state.isOpen && <section><div>{result.autor}</div><div>{result.comment}</div></section>
        return (
            <div>
                <div>
                    <h2>{result.title}</h2>
                </div>
                <div>
                    {body}
                </div>
                <h2>
                    Комментарий
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                <div>
                    {body_com}
                </div>
            </div>
        )
    }
}


function handleClick () {
    this.setState ({
        isOpen: !this.state.isOpen
    })
}


export default Result
