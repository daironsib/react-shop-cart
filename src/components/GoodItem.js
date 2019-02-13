import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increaseAmount, decreaseAmount, changeAmount, removeGood} from '../actions';

class TotalAmount extends React.Component {

    increase = () => {
        this.props.increaseAmount(this.props.good.id);
    };

    decrease = () => {
        this.props.decreaseAmount(this.props.good.id);
    };

    updateInputValue = (evt) => {
        const value = Number(evt.target.value);
        if (101 > value > 0) {
            this.props.changeAmount(this.props.good.id, value);
        }
    }

    remove = () => {
        this.props.removeGood(this.props.good.id);
    }

    render() {
        const {good} = this.props;

        return (
            <div className="good_item">
                <div className="left">
                    <div className="photo">
                        <img src={good.photo} alt={good.title}/>
                    </div>
                </div>
                <div className="center">
                    <div className="title">{good.title}</div>
                    <div className="subtitle">{good.subtitle}</div>
                </div>
                <div className="right">
                    <div className="top">
                        <span className="remove" onClick={this.remove}></span>
                    </div>
                    <div className="bottom">
                        <div className="counter_cont">
                            <button className="minus" onClick={this.decrease} disabled={good.amount < 1}>-</button>
                            <div className="inp_cont">
                                <input type="text" value={good.amount} onChange={evt => this.updateInputValue(evt)}/>
                            </div>
                            <button className="minus" onClick={this.increase} disabled={good.amount > 99}>+</button>
                        </div>
                        <div className="right">
                            <div className="price">{Number.isInteger(good.price) ? good.price + '.00' : good.price} €
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({goods: state}),
    (dispatch) => bindActionCreators({increaseAmount, decreaseAmount, changeAmount, removeGood}, dispatch))(TotalAmount)
