import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';
import FastImage from 'react-native-fast-image';


export default class UserItem extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.onItemClick(this.props.item)}>
                <View style={styles.item}>
                    <FastImage
                        resizeMode={FastImage.resizeMode.contain}
                        source={{uri: this.props.item.imageSrc}}
                        style={styles.image}/>
                    <View style={styles.name}>
                        <View style={styles.nameVal}>
                            <Text>{this.props.item.lastName}</Text>
                        </View>
                        <View style={styles.nameVal}>
                            <Text>{this.props.item.firstName}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        margin: 5,
        padding: 5,
        flexDirection: 'row',
    },
    image: {
        minWidth: 70,
        minHeight: 70,
    },
    name: {
        flex: 6,
        marginStart: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    nameVal: {},
});

