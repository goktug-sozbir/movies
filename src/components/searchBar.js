import React from 'react'

class searchBar extends React.Component {

   

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {

        return (

            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input 
                        onChange={this.props.searchMovieprop} 
                        type="text" 
                        className="form-control" 
                        placeholder="Search a movie"
                        />
                    </div>
                </div>
            </form>

        )
    }
}

export default searchBar