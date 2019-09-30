import React from 'react';
import RegisterForm from './RegisterForm';

export default class Register extends React.Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(data) {
        console.log("handleSubmit data", data);
    }
    render() {
        return (
            <RegisterForm onSubmit={data => (this.handleSubmit(data))}/>
        )
    }
}
