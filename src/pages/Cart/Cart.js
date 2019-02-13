import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './Cart.scss';
import GoodItem from '../../components/GoodItem';
import TotalAmount from '../../components/TotalAmount';

class Cart extends React.Component {
    render() {
        const {goods} = this.props;

        return (
            <div className="cart_container">
                {
                    goods.map(good =>
                        <GoodItem good={good} key={good.id}/>
                    )
                }
                <TotalAmount/>
            </div>
        );
    }
}

export default connect(
    (state) => ({goods: state}),
    (dispatch) => bindActionCreators({}, dispatch))(Cart)
