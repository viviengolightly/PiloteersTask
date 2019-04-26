import React from 'react';

class Title extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1 onClick={this.props.onClick}>BEERS</h1>
            </div>
        );
    }
}

export default Title;