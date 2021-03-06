import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Ionicon from 'react-ionicons';

import './round-button.css';

class RoundButton extends Component {
    render() {

        return (
            <div {...{ ...this.props, actived: null }} className={"round-button " + this.props.className + (this.props.actived ? " active" : '')}>
                <Ionicon icon={this.props.icon} color="white" />
            </div>
        );
    }
}

RoundButton.propTypes = {
    actived: PropTypes.bool
}

export default RoundButton;