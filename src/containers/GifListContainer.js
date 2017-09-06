import React from 'react'
import 'isomorphic-fetch'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const API = "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC"

// In our app the <GifListContainer /> will be responsible for fetching the data from the giphy api, storing the first 3 gifs from the response in its component state, and passing that data down to its child the <GifList> component as a prop.
// It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.

export default class GifListContainer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			gifs: []
		}

		this.submitHandler = this.submitHandler.bind(this)
		this.fetchGifs = this.fetchGifs.bind(this)
	}

	fetchGifs(gifSearch) {
		let url = `http://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=dc6zaTOxFJmzC`
		fetch(url).then(res => res.json()).then(gifs => this.setState({ gifs: gifs.data }))
	}

	submitHandler(gifSearch) {
		this.fetchGifs(gifSearch)
	}

	render() {
		return (
			<div>
				<GifSearch submitCallBack={this.submitHandler} />
				<GifList gifs={this.state.gifs} />
			</div>
		)
	}
}