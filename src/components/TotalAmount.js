import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class TotalAmount extends React.Component {

    render() {
        const {goods} = this.props;

        let totalAmount = 0;

        goods.forEach(good => {
            totalAmount += good.amount * good.price;
        });

        return (
            <div className="total_cont">
                <div className="price">{totalAmount} €</div>
                <Link to="/shipping">
                    <button className="buy_btn">BUY</button>
                </Link>
            </div>
        );
    }
}

export default connect(
    (state) => ({goods: state}),
    (dispatch) => bindActionCreators({}, dispatch))(TotalAmount)
