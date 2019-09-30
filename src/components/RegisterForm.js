import React from 'react';
import {reduxForm, Field, Form} from 'redux-form';
import {ScrollView, Text, StyleSheet, View} from 'react-native';

import TextInputFormElement from './TextInputFormElement';
import schema from '../schemas/RegisterForm';
import {Button, Item} from 'native-base';
import DatePickerFormElement from './DatePickerFormElement';

export const fields = Object.keys(schema.fields);

//const fields = ["firstName","lastName","email","password","confirmPassword","date"];

class RegisterForm extends React.Component {
    formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
        'submitSucceeded', 'submitFailed'];

    componentDidMount(): void {
        console.log('RegisterForm', this.props);
    }

    fieldsProps = {
        firstName: {
            displayName: 'First name',
            textContentType: 'name',
        },
        lastName: {
            displayName: 'Last name',
            textContentType: 'familyName',
        },
        email: {
            displayName: 'Email',
            keyboardType: 'email-address',
            textContentType: 'emailAddress',
        },
        password: {
            displayName: 'Password',
            textContentType: 'newPassword',
            secureTextEntry: true,
        },
        passwordConfirm: {
            displayName: 'Confirm password',
            textContentType: 'newPassword',
            secureTextEntry: true,
        },
        date: {
            displayName: 'Date',
            editable: false,
            picker:{
                mode: "date"
            }
        },
    };

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.formContainer}>
                <Field
                    style={styles.fieldContainer}
                    name={'firstName'}
                    props={this.fieldsProps.firstName}
                    autoCompleteType={'off'}
                    component={TextInputFormElement}
                />
                <Field
                    style={styles.fieldContainer}
                    name={'lastName'}
                    props={this.fieldsProps.lastName}
                    autoCompleteType={'off'}
                    component={TextInputFormElement}
                />
                <Field
                    style={styles.fieldContainer}
                    name={'email'}
                    props={this.fieldsProps.email}
                    autoCompleteType={'off'}
                    component={TextInputFormElement}
                />
                <Field
                    style={styles.fieldContainer}
                    name={'password'}
                    props={this.fieldsProps.password}
                    autoCompleteType={'off'}
                    component={TextInputFormElement}
                />
                <Field
                    style={styles.fieldContainer}
                    name={'passwordConfirm'}
                    props={this.fieldsProps.passwordConfirm}
                    autoCompleteType={'off'}
                    component={TextInputFormElement}
                />
                <Field
                    style={styles.fieldContainer}
                    name={'date'}
                    props={this.fieldsProps.date}
                    component={DatePickerFormElement}
                />

                <Text>The form is:</Text>
                {
                    this.formStates.filter((state) => this.props[state]).map((state) => {
                        return <Text key={state}> - {state}</Text>;
                    })
                }
                <Button style={styles.buttonSubmit} block onPress={this.props.handleSubmit}>
                    <Text style={styles.buttonSubmitText}>Submit</Text>
                </Button>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 5,
    },
    formContainer: {
        margin: 20,
    },
    buttonSubmit: {
        marginTop: 5,
    },
    buttonDate: {
        marginTop: 5,
    },
    buttonSubmitText: {
        color: 'white',
    }
});

export default reduxForm({
    form: 'RegisterForm',
    fields,
    validate: (values) => {
        console.log('v', values);
        try {
            schema.validateSync(values, {abortEarly: false});
            return {};
        } catch (errors) {
            let rErrors = {};
            errors.inner.forEach(error => {
                rErrors[error.path] = error.message;
            });
            return rErrors;
        }

    },
    pure: true,
})(RegisterForm);
