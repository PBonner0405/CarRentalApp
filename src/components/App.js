import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Calendar from './calendar/calendar';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
`;

const App = () => {

    return (
        <Container>
            {/* <Title>
                <span role="img" aria-label="Bolt">
                    ⚡
                </span>{' '}
                Freight Genius
            </Title>
            <Paragraph>This is initial setup for Freight Genius</Paragraph>
            <Paragraph> 
                {time.calendarDisplayType === DAILY_VIEW ? 'Day' : 'Week'}
            </Paragraph>
            <button type="button" onClick={() => props.changeCalendarFormat(DAILY_VIEW)} >Daily</button>
            <button type="button" onClick={() => props.changeCalendarFormat(WEEKLY_VIEW)} >Weekly</button> */}
            <Calendar></Calendar>
        </Container>);
};

function mapStateToProps(state) {

    return {
        time: state.time,
    };
}

export default connect(mapStateToProps)(App);