import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Item, Input, Label} from 'native-base';


export default function TextInputFormElement(props) {
    const {input, meta, ...inputProps} = props;

    console.log('TextInputFormElement', props);

    return (
        <Fragment>
            <Item stackedLabel error={meta.error && meta.touched}>
                <Label>{props.displayName ? props.displayName : meta.name}</Label>
                <Input {...inputProps}
                       onChangeText={input.onChange}
                       onBlur={input.onBlur}
                       onFocus={input.onFocus}
                       value={input.value}
                />
                {/*{
                    meta.touched
                    && meta.error
                    && <Icon style={styles.errorIcon} error name='close-circle' />
                }*/}
            </Item>

            {
                meta.touched
                && meta.error
                && <Text style={styles.errorText}>{meta.error}</Text>
            }
        </Fragment>
    );
}

const styles = StyleSheet.create({

});