import React from "react";



class SearchBox extends React.Component {

	render(){
		return (
			<div>
				<input 
					type="search" 
					name="search"  
					className="search"
					placeholder="search..."   />	
			</div>
		)
	}


}


export default SearchBox;