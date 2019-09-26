import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import toyotaPirus from '../../../images/Cars/pirus.png';
import toyotaPirusB from '../../../images/Cars/pirus_b.png';
import toyotaXenia from '../../../images/Cars/xenia.png';
import toyotaXeniaB from '../../../images/Cars/xenia_b.png';

const Container = styled.div`
    display: inline-flex;
    flex-direction: row;
    height: 107px;
    border-bottom: 1px solid #F2F4F6;
`;

const CarContainer = styled.div`
    display: flex;
    height: 107px;
    width: 165px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 3px solid #F2F4F6;
`;

const ActionContainer = styled.div`
    display: flex;
    width: 176px;
    align-items: center;
    justify-content: center;
    border-left: 3px solid #F2F4F6;
`;

const DefaultButton = styled.button`
    background: #FFFFFF;
    border: 1px solid #E8ECEF;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    width: 144px;
    height: 46px;
    align-items: center;
    justify-content: center;

    /* Button Text Style */
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.3px;
    color: #778CA2;

    &:hover {
        background: #F2F4F6;
    }
`;

const Label = styled.h1`
    color: ${props => {
        let color;
        if (props.active) {
            color = "#21A21E";
        } else if (props.outservice) {
            color = "#C11B1B";
        } else if (props.inshop) {
            color = "#C1931B";
        } else {
            color = "#252631";
        }
        return color;
    }};

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
`;

const StateByTimeContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 11px 3px 11px 0px;
    flex: 1;
`;

const StateByTimeItem = styled.div`
    background: ${props => {
        let color;
        if (props.requested) {
            color = "#76AA56";
        } else if (props.unavailable) {
            color = "#E8ECEF";
        } else
            color = "#FFFFFF";
        return color;
    }};
    display: flex;
    flex: 1;
    margin-left: 3px;
    border: 1px solid #E8ECEF;
    box-sizing: border-box;
    border-radius: 4px;
`;

const MemoBox = styled.div`
    background: #ECF1FE;
    box-shadow: 0px 1px 0px #CCD8F7;
    border-radius: 4px;
    display: flex;
    height: 83px;
    position: absolute;
    top: 11px;
    bottom: 11px;
    padding:10px;

    /* Text Style */
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: #778CA2;
`;

const DetailView = (props) => {
    const { details } = props;

    let StateLabel;
    if(details.state === "active")
        StateLabel = <Label active>{details.state}</Label>;
    else if(details.state === "Out of service")
        StateLabel = <Label outservice>{details.state}</Label>;
    else StateLabel = <Label inshop>{details.state}</Label>;

    let CarImage;
    if(details.type === "prius")
        CarImage = <img src={toyotaPirus} alt="Toyota Pirus"/>;
    if(details.type === "priusb")
        CarImage = <img src={toyotaPirusB} alt="Toyota PirusB"/>;
    else if(details.type === "xenia")
        CarImage = <img src={toyotaXenia} alt="Toyota Xenia"/>;
    else if(details.type === "xeniab")
        CarImage = <img src={toyotaXeniaB} alt="Toyota XeniaB"/>;
    
    return (
        <Container>
            <CarContainer>
                { CarImage }
                <Label>{details.model}</Label>
                { StateLabel }
            </CarContainer>
            <StateByTimeContainer>
                {
                    details.booking_state.map((item, ind) => (
                        item === 1
                            ? <StateByTimeItem key={ind} unavailable/>
                            : <StateByTimeItem key={ind} available/>
                    ))
                }
                {
                    details.memo &&
                    <MemoBox style={{left: `${details.memo.time[0]}%`, right: `${100 - details.memo.time[1]}%`}}>
                        {details.memo.comment} <br/>
                        Jun 7, 8:00 am - June 21, 12:00 pm
                    </MemoBox>
                }
            </StateByTimeContainer>
            <ActionContainer>
                <DefaultButton> Assign Vehicle </DefaultButton>
            </ActionContainer>
        </Container>
    );
};

DetailView.propTypes = {
    details: PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        booking_state: PropTypes.array.isRequired,
        memo: PropTypes.shape({
            time: PropTypes.array.isRequired,
            comment: PropTypes.string.isRequired,
        })
    }).isRequired,
};

function mapStateToProps(state, props) {

    return {
        details: props.details,
    };
}

export default connect(mapStateToProps)(DetailView);