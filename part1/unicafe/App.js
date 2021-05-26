/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './App.css';

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Title = ({ content }) => {
    return (
        <h2>{content}</h2>
    )
}

const Statistic = ({text, value}) => {
    return(
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    if (good+neutral+bad===0) {
        return(
            <div>
                <Title content='statistics' />
                No feedback given
            </div>
        )
    }
    return(
        <div>
            <Title content='statistics' />
        <table>
        <tbody>
            <Statistic text="good" value={good}/>
            <Statistic text="neutral" value={neutral}/>
            <Statistic text="bad" value={bad}/>
            <Statistic text="average" value={(good-bad)/(good+bad+neutral)}/>
            <Statistic text="Positive" value={ good * 100 / (good + bad + neutral) + "%"}/>
        </tbody>
        </table>

        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    return (
        <div>
            <Title content="give feedback" />
            <Button handleClick={() => setGood(good + 1)} text='good' />
            <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
            <Button handleClick={() => setBad(bad + 1)} text='bad' />
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App;
