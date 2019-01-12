import React, { Component } from 'react';
import Player from './Player';
class Table extends Component {

   


    render() {
      
        return (
            <tbody>
                {this.props.table.map(player=>(
                        <Player
                        key={player.name}
                        player={player}
                        />
                    ))}
            </tbody>
        );
    }
}

export default Table;