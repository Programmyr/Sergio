import React, { Component } from 'react';

class Form extends Component {

    //Creating Refs

    playerRef = React.createRef();
    positionRef = React.createRef();
    ageRef= React.createRef();


    
    searchPlayer = (e)=>{
        e.preventDefault();

        const dataSearch = {
            player: this.playerRef.current.value,
            position: this.positionRef.current.value
        }
       // this.props.dataQuery(this.positionRef.current.value);
       // this.props.dataQuery(this.playerRef.current.value);

        this.props.getEvents(dataSearch);
    }

    render() {
        
        return (

            <div className="container">
                <form onSubmit={this.searchPlayer}>
                    <div className="row">
                        <div className="form-group col-md-3">
                            <label htmlFor="playerName">Player Name</label>
                            <input type="text" ref={this.playerRef} className="form-control" id="playerName" aria-describedby="playerName" pattern="[A-Za-z]" placeholder="Enter Player name"/>
                            <small id="playerHelp" className="form-text text-muted">Please only letters.</small>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="position">Position</label>
                            <select  className="form-control" ref={this.positionRef}>
                                <option value="" defaultValue>Position</option>
                                <option value="Attacking Midfield">Attacking Midfield</option>
                                <option value="Central Midfield">Central Midfield</option>
                                <option value="Centre-Back">Centre-Back</option>
                                <option value="Centre-Forward">Centre-Forward</option>
                                <option value="Centre-Forward">Centre-Forward</option>
                                <option value="Defensive Midfield">Defensive Midfield</option>
                                <option value="Keeper">Keeper</option>
                                <option value="Left Midfield">Left Midfield</option>
                                <option value="Left Wing">Left Wing</option>
                                <option value="Left-Back">Left-Back</option>
                                <option value="Right-Back">Right-Back</option>
                            </select>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="age">Age</label>
                            <input type="number" ref={this.ageRef} className="form-control" id="age" aria-describedby="number" min="18" max="40" placeholder="Enter Player Age"/>
                            <small id="ageHelp" className="form-text text-muted">Please only Numbers.</small>
                        </div>
                        
                        <div className="form-group col-md-3">
                            <br/>
                            <input type="submit" className="btn btn-lg btn-primary " value="Search..." onChange={this.onchange} />
                        </div>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default Form;