import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`

    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #eee;
    padding: 16px;
    text-align: center;


    @media (min-width: 500px) {
        width: 450px;
    }
`;

const Person = (props) => {

    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.changeName}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input id={props.index} type="text" onChange={props.editName} value={props.name}/>
            <button onClick={() => props.clicked(props.index)}>Delete</button>
        </StyledDiv>
    );
}

export default Person;