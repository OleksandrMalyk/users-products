import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, Input, Item, Label} from 'native-base';
import moment from 'moment';

export default class DatePickerFormElement extends React.Component {

    constructor() {
        super();

        this.setDate = this.setDate.bind(this);
        this.state = {
            date: new Date(),
            show: false,
        };
    }

    formattedDate() {
        if (!this.state.date) {
            return '';
        }
        return moment(this.state.date).format('DD/MM/YYYY');
    }

    componentDidMount(): void {
        console.log('DatePickerFormElement', this.props);
        this.props.input.onChange(this.state.date.toString());

    }

    show = mode => {
        this.setState({
            show: true,
            mode,
        });
    };

    datepicker = () => {
        this.show('date');
    };

    setDate(event, date) {
        date = date || this.state.date;

        this.setState({
            show: Platform.OS === 'ios',
            date,
        });

        this.props.input.onChange(date.toString());
    }

    renderDatePicker() {
        return (
            <DateTimePicker value={this.state.date ? this.state.date : new Date()}
                                               {...this.props.picker}
                                               is24Hour={true}
                                               display="default"
                                               onChange={this.setDate}/>
        );
    }

    render() {
        const {input, meta, picker, ...inputProps} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.valueContainer}>
                    <Item stackedLabel error={meta.error && meta.touched}>
                        <Label>{this.props.displayName ? this.props.displayName : meta.name}</Label>
                        <Input
                            {...inputProps}
                            value={this.formattedDate()}
                        />
                    </Item>
                    {
                        meta.touched
                        && meta.error
                        && <Text style={styles.errorText}>{meta.error}</Text>
                    }
                </View>
                <View style={styles.pickerContainer}>
                    <Button block info onPress={this.datepicker}>
                        <Text>Pick the date!</Text>
                    </Button>

                    {this.state.show && this.renderDatePicker()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    errorText: {
        marginHorizontal: 2,
        fontSize: 12,
        color: 'red',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    valueContainer: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 15,
    },
    pickerContainer: {
        flex: 1,
    },
});