import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { changeCalendarFormat, DAILY_VIEW, WEEKLY_VIEW } from '../../actions/timeActions';
import DetailView from './detailView/detailView';

import backArrow from '../../images/Buttons/back_arr.svg';
import leftArrow from '../../images/Buttons/Outline/left.svg';

const Container = styled.div`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 32px 27px 0px 27px;
    background: #F8FAFB;
    color: #778CA2;
    font-family: 'Open Sans', sans-serif;
`;

const BackButton = styled.h1`
    display: flex;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #778CA2;
    height: 24px;
    cursor: pointer;
`;

const CalendarFormatingContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const DateSelectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ButtonActive = styled.button`
    background: #F2F4F6;
    border: 1px solid #E8ECEF;
    box-sizing: border-box;
    border-radius: 4px 0px 0px 4px;
    width: 62px;
    height: 46px;
    /*Text CSS*/
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #778CA2;
    cursor: pointer;
    &:hover {
        background: #FFFFFF;
    }
`;

const ButtonInActive = styled.button`
    background: #FFFFFF;
    border: 1px solid #E8ECEF;
    box-sizing: border-box;
    border-radius: 4px 0px 0px 4px;
    width: 62px;
    height: 46px;
    /*Text CSS*/
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #778CA2;
    cursor: pointer;
    &:hover {
        background: #F2F4F6;
    }
`;

const DateRange = styled.h1`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #252631;
`;

const DateSelector = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 47px;
    height: 46px;
    background: #FFFFFF;
    border: 1px solid #E8ECEF;
    box-sizing: border-box;
    border-radius: 4px 0px 0px 4px;
    cursor: pointer;
    &:hover {
        background: #F2F4F6;
    }
`;

const CDClicker = styled.button`
    width: 72px;
    height: 46px;
    background: #FFFFFF;
    border: 1px solid #E8ECEF;
    box-sizing: border-box;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #778CA2;
    cursor: pointer;
    &:hover {
        background: #F2F4F6;
    }
`;

const ImageButton = styled.img`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

/* Calendar Container Styled-Component */
const CalendarContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    height: calc(100vh - 32px - 24px - 24px - 30px - 46px);
`;

/* Calendar Header Styled-Components */

const CalendarHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 46px;
    background: #F8FAFB;
    border: 1px solid #E8ECEF;
    box-sizing: border-box;
    border-radius: 4px 4px 0px 0px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    /* identical to box height, or 142% */
    display: flex;
    align-items: center;
    padding: 15px; 15px; 14px; 15px;
    color: #252631;
`;

/* Calendar Footer Styled-Components */

const CalendarFooter = styled.div`
    height: 49px;
    display: flex;
    fiex-direction: row;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border: 1px solid #E8ECEF;
    box-sizing: border-box;
`;

const ColorBoxWithLabel = styled.div`
    display: flex;
    margin-left: 15px;
    margin-right: 15px;
`;

const ColorBox = styled.div`
    background: ${props => {
        let backColor;
        if (props.green) {
            backColor = "#76AA56";
        } else if (props.gray) {
            backColor = "#E8ECEF";
        } else {
            backColor = "#FFFFFF";
        }
        return backColor;
    }};
    width: 38px;
    height: 23px;
    border: 1px solid #CFD3D6;
    box-sizing: border-box;
    border-radius: 4px;
`;

const ColorLabel = styled.h1`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */
    display: flex;
    align-items: center;
    color: #778CA2;
    margin-left: 8px;
`;

/* Calendar Body Styled-Components */

const CalendarBody = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    height: calc(100% - 49px - 46px);
    overflow-y: auto;
    overflow_x: hidden;
`;

const TimeBar = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    background: #FFFFFF;
    border: 1px solid #F2F4F6;
    box-sizing: border-box;
    box-shadow: 0px -1px 8px rgba(0, 0, 0, 0.05);
    border-radius: 0px;
    bottom: 49px;
    left: 190px;
    height: 37px;
    right: 200px;
`;

const TimeCol = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 17px;
    display: flex;
    flex: 1;
    align-items: center;
    text-align: center;
    color: #778CA2;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-left: 3px;
`;

const Calendar = (props) => {
    const { time } = props;
    const cardetails = [
        {
            id: 0,
            type: "prius",
            model: "Toyota Prius (B-01989)",
            state: "active",
            booking_state: [1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1]
        },
        {
            id: 1,
            type: "xenia",
            model: "Daihatsu Xenia (B-59928)",
            state: "active",
            booking_state: [1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0]
        },
        {
            id: 2,
            type: "priusb",
            model: "Toyota Prius (B-41082)",
            state: "Out of service",
            booking_state: [1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1]
        },
        {
            id: 3,
            type: "xeniab",
            model: "Daihatsu Xenia (B-59928)",
            state: "In shop",
            booking_state: [1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1]
        },
        {
            id: 4,
            type: "prius",
            model: "Toyota Prius (B-01989)",
            state: "active",
            booking_state: [1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0]
        },
        {
            id: 5,
            type: "xeniab",
            model: "Daihatsu Xenia (B-59928)",
            state: "In shop",
            booking_state: [1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1]
        }
    ];

    const hours = [
        "12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm",
        "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm", "10 pm", "11 pm"
    ];

    const weekdays = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ];

    return(
        <Container>
            <BackButton>
                <img src={backArrow}  alt="back" /> 
                <span style={{marginLeft: "12px"}}>
                    New Assignment
                </span>
            </BackButton>
            {
                time.calendarDisplayType === DAILY_VIEW 
                    ? (
                        <CalendarFormatingContainer>
                            <ButtonContainer>
                                <ButtonActive type="button" onClick={() => props.changeCalendarFormat(DAILY_VIEW)} >Daily</ButtonActive>
                                <ButtonInActive type="button" onClick={() => props.changeCalendarFormat(WEEKLY_VIEW)} >Weekly</ButtonInActive>
                            </ButtonContainer>
                            <DateRange>June 13, 2019</DateRange>
                            <DateSelectionContainer>
                                <DateSelector>
                                    <ImageButton src={leftArrow} alt="Before"/>
                                </DateSelector>
                                <CDClicker> Today </CDClicker>
                                <DateSelector>
                                    <ImageButton src={leftArrow} style={{transform: "rotate(180deg)"}} alt="After"/>
                                </DateSelector>
                            </DateSelectionContainer>
                        </CalendarFormatingContainer>
                    )
                    : (
                        <CalendarFormatingContainer>
                            <ButtonContainer>
                                <ButtonInActive type="button" onClick={() => props.changeCalendarFormat(DAILY_VIEW)} >Daily</ButtonInActive>
                                <ButtonActive type="button" onClick={() => props.changeCalendarFormat(WEEKLY_VIEW)} >Weekly</ButtonActive>
                            </ButtonContainer>
                            <DateRange>June 13, 2019</DateRange>
                            <DateSelectionContainer>
                                <DateSelector>
                                    <ImageButton src={leftArrow} alt="Before"/>
                                </DateSelector>
                                <CDClicker> This Week </CDClicker>
                                <DateSelector>
                                    <ImageButton src={leftArrow} style={{transform: "rotate(180deg)"}} alt="After"/>
                                </DateSelector>
                            </DateSelectionContainer>
                        </CalendarFormatingContainer>
                    )
            }
            <CalendarContent>
                <CalendarHeader>Vehicle</CalendarHeader>
                <CalendarBody>
                    {
                        cardetails.map((row) => (
                            <DetailView details={row} key={row.id}></DetailView>
                        ))
                    }
                    <TimeBar>
                        {
                            time.calendarDisplayType === DAILY_VIEW
                                ? (
                                    hours.map((item) => (
                                        <TimeCol key={item}>{item}</TimeCol>
                                    ))
                                )
                                : (
                                    weekdays.map((item) => (
                                        <TimeCol key={item}> {item} </TimeCol>
                                    ))
                                )
                        }
                    </TimeBar>
                </CalendarBody>
                <CalendarFooter>
                    <ColorBoxWithLabel>
                        <ColorBox green/>
                        <ColorLabel> Requested Booking </ColorLabel>
                    </ColorBoxWithLabel>
                    
                    <ColorBoxWithLabel>
                        <ColorBox white/>
                        <ColorLabel> Available Time-Slots </ColorLabel>
                    </ColorBoxWithLabel>
                    
                    <ColorBoxWithLabel>
                        <ColorBox gray/>
                        <ColorLabel> Booking Unavailable </ColorLabel>
                    </ColorBoxWithLabel>
                </CalendarFooter>
            </CalendarContent>
        </Container>
    );
};

Calendar.propTypes = {
    time: PropTypes.shape({
        calendarDisplayType: PropTypes.string.isRequired,
    }).isRequired,
    changeCalendarFormat: PropTypes.func.isRequired,
};

function mapStateToProps(state) {

    return {
        time: state.time,
    };
}

export default connect(mapStateToProps,
    {
        changeCalendarFormat,
    })(Calendar);