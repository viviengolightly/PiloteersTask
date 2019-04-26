import React from 'react';

class Details extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.data.map(beer =>{
                    if(beer.id === this.props.idSelected){
                        return(
                            <span key={beer.id}>{beer.name}</span>
                        );
                    }
                })}
            </div>
        );
    }
}

export default Details;