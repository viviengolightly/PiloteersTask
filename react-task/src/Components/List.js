import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.data.map(beer => {
                    return(
                        <ul 
                        key={beer.id}
                        onClick={() => this.props.onBeerClick(beer.id)}
                        >
                            <li>
                                {`${beer.name}: abv: ${beer.abv} ibuMax: ${beer.style}`}
                            </li>
    
                        </ul>
                    );
                })}
            </div>
        );
    }
}

export default List;