import React from 'react';

const Player = (props) => {

    const {name,position,nationality,dateOfBirth}=props.player;
    
    const date = dateOfBirth;
    var values= date.split("-");
    var day = values[2];
    var month = values[1];
    var year = values[0];

    var todayDate = new Date();
    var todayYear = todayDate.getYear()+1900;
    var age = todayYear- year;
    document.getElementsByName("ages").value = age;
    
    return (
        <tr>
                    <td>{name}</td>
                    <td>{position}</td>
                    <td>{nationality}</td>
                    <td name="ages" value="">{age}</td>
        </tr>
    );
};

export default Player;