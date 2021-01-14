import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {withRouter} from 'react-router-dom';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    placeholder: 'Imię'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    placeholder: 'Ulica'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    placeholder: 'Kod pocztowy'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    placeholder: 'Kraj'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementtype: 'input',
                elementconfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementtype: 'select',
                elementconfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Szybka'},
                        {value: 'cheapest', displayValue: 'Tańsza'}
                    ]
                },
                value: '',
                validation: {},
                valid: true
            },
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: this.state.orderForm.name.value,
                email: this.state.orderForm.email.value,
                address: {
                    street: this.state.orderForm.street.value,
                    zipCode: this.state.orderForm.zipCode.value,
                    country: this.state.orderForm.country.value
                }
            },
            deliveryMethod: this.state.orderForm.deliveryMethod.value
        }
        axios.post('/orders', order)
            .then(response => {
                this.setState({loading : false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading : false});
            });
    }

    checkValidity(value, rules) {
        let isValid = false;

        if(rules.required) {
            isValid = value.trim() !== '';
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementtype={formElement.config.elementtype} 
                        elementconfig={formElement.config.elementconfig} 
                        value={formElement.config.value} 
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>Zamów</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Wprowadź swoje dane kontaktowe</h4>
                {form}
            </div>
        );
    }
}

export default withRouter(ContactData);