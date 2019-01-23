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
            <div className = "card mx-auto" style={{margin: '20px', width: '600px'}}>
                <div className = "card-header">
                    <h2>{result.title}</h2>
                </div>
                <div className = "card-body">
                    {body}
                </div>
                <h2 className = "text-center">
                    Комментарий
                    <button onClick={this.handleClick} className = "btn btn-primary btn-lg" style={{margin: '20px', width: '100px'}}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                <div className = "card-text text-center">
                    {body_com}
                </div>
            </div>
        )
    }
}


function handleClick () {
    console.log ('---', 'clicked')
    this.setState ({
        isOpen: !this.state.isOpen
    })
}


export default Result