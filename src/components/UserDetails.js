import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';
import FastImage from 'react-native-fast-image';

export class UserDetails extends React.Component {

    getNavParam(paramName: string) {
        return this.props.navigation.getParam(paramName, {});
    }

    render() {
        return (
            <Fragment>
                <View style={styles.imageContainer}>
                    <FastImage
                        resizeMode={FastImage.resizeMode.contain}
                        source={{uri: this.getNavParam('user').imageSrc}}
                        style={styles.image}/>
                </View>
                <View style={styles.container}>
                    <View style={styles.name}>
                        <Text style={styles.nameVal}>{this.getNavParam('user').lastName}</Text>
                        <Text style={styles.nameVal}>{this.getNavParam('user').firstName}</Text>

                    </View>
                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    imageContainer: {
        flex: 2,
        margin: 15,
        justifyContent: 'flex-start',
        position: 'relative',
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    name: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    nameVal: {
        alignSelf: 'center',
        fontSize: 42,
    },
});