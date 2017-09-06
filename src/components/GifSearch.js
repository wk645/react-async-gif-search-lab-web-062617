// <GifSearch /> should receive a callback prop from its parent. On a submit event, it should invoke that callback prop with the value of the text input. It is this callback function, defined in <GifListContainer />, that will actually query the api with the text the user has entered.

import React from 'react'

export default class GifSearch extends React.Component {
	constructor() {
		super()

		this.state = {
			input: ''
		}

		this.handleInput = this.handleInput.bind(this)
		this.valueHandler = this.valueHandler.bind(this)
	}

	handleInput(event) {
		this.setState({input: event.target.value})
	}

	valueHandler(event) {
		event.preventDefault()
		this.props.submitCallBack(this.state.input)
	}

	render() {
		return (
			<div className="form-wrapper">
				<form onSubmit={this.valueHandler}>
					<input type="text" value={this.state.input} onChange={this.handleInput}/>
					<br/>
					<br/>
				</form>
			</div>
			)
	}
}