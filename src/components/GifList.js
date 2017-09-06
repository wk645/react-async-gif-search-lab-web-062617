// <GifList /> is a presentational component. It receives data from its props and renders html given the input data. It can render a top level <ul> with each gif as an <li>.

import React from 'react'

const GifList = props =>
	<ul>
		{props.gifs.map(function(gif) {
			return <li key={gif.id}><img src={gif.images.fixed_height.url} /></li>
		})}
	</ul>

// {props.gifs.map((gif, index) => <li key={index}>{gif}</li>}

export default GifList