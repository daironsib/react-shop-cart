import React from 'react';
import {Formik, Field} from 'formik';
import {SelectField} from '../../components/SelectField';
import './Shipping.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Shipping extends React.Component {

    state = {
        btnDisabled: true
    }

    render() {
        const {btnDisabled} = this.state;
        const {goods} = this.props;

        let totalAmount = 0;

        goods.forEach(good => {
            totalAmount += good.amount * good.price;
        });

        const options = [
            {
                value: {name: 'ninjPost', price: 0},
                label: 'ninjPost (FREE SHIPPING)',
                disabled: this.props.goods.length > 3
            },
            {value: {name: 'D7L', price: totalAmount > 200 ? 0 : 15.99}, label: 'D7L'},
            {value: {name: '7post', price: totalAmount > 200 ? 0 : 7.99}, label: '7post'}
        ];

        return (
            <div className="shipping_container">
                <Formik
                    initialValues={{name: '', address: '', phone: '', email: '', shippingOptions: ''}}
                    validate={values => {
                        let errors = {};

                        if (!values.name) {
                            errors.name = 'Required';
                        } else if (values.name.length < 3) {
                            errors.name = 'min length - 3 chars';
                        }

                        if ((values.phone && values.phone.length < 9) || values.phone.length > 9) {
                            errors.phone = 'must be 9 characters';
                        }

                        if (!values.address) {
                            errors.address = 'Required';
                        }

                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }

                        if (Object.keys(errors).length === 0) {
                            this.setState({btnDisabled: false})
                        } else {
                            this.setState({btnDisabled: true})
                        }

                        return errors;
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="line">
                                <div className="left">Name*</div>
                                <div className="right">
                                    <Field type="text" name="name" placeholder="John Kowalsky"
                                           className={errors.name ? 'error' : ''}/>
                                    <span className="error_cont">{errors.name}</span>
                                </div>
                            </div>
                            <div className="line">
                                <div className="left">Address*</div>
                                <div className="right">
                                    <Field type="text" name="address" placeholder="Address"
                                           className={errors.address ? 'error' : ''}/>
                                    <span className="error_cont">{errors.address}</span>
                                </div>
                            </div>
                            <div className="line">
                                <div className="left">Phone</div>
                                <div className="right">
                                    <Field type="phone" name="phone" placeholder="Phone"
                                           className={errors.phone ? 'error' : ''}/>
                                    <span className="error_cont">{errors.phone}</span>
                                </div>
                            </div>
                            <div className="line">
                                <div className="left">Email</div>
                                <div className="right">
                                    <Field type="email" name="email" placeholder="Email"
                                           className={errors.email ? 'error' : ''}/>
                                    <span className="error_cont">{errors.email}</span>
                                </div>
                            </div>
                            <div className="line">
                                <div className="left">Shipping Options</div>
                                <div className="right">
                                    <Field name='shippingOptions' component={SelectField} options={options}/>
                                </div>
                            </div>
                            <div className="btn_cont">
                                <button type="submit" className="buy_btn" disabled={btnDisabled || isSubmitting}>Pay
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default connect(
    (state) => ({goods: state}),
    (dispatch) => bindActionCreators({}, dispatch))(Shipping)
