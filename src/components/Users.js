import React from 'react';
import {
    View, FlatList,
    RefreshControl, TouchableOpacity,
    ActivityIndicator, Text,
    StyleSheet,
} from 'react-native';

import UserItem from './UserItem';
import {connect} from 'react-redux';
import {getUsers, loadMoreUsers} from '../redux/actions/users';


class Users extends React.Component {

    static navigationOptions = {
        title: 'Users',
    };

    componentDidMount(): void {
        this.props.dispatch(getUsers());
    }

    constructor(props) {
        super(props);
        this.handleClickUser = this.handleClickUser.bind(this);
        this.refresh = this.refresh.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    handleClickUser(user) {
        this.props.navigation.navigate('UserDetails', {user});
    }

    refresh() {
        this.props.dispatch(getUsers());
    }

    loadMore() {
        this.props.dispatch(loadMoreUsers({
            currentUsersCount: this.props.users.length,
        }));
    }

    renderRefreshControl() {
        return (
            <RefreshControl refreshing={this.props.isRefreshing}
                            onRefresh={this.refresh}/>
        );
    }

    renderItem(item) {
        return (
            <UserItem item={item}
                      onItemClick={this.handleClickUser}/>
        );
    }

    renderActivityIndicator() {
        return (
            <ActivityIndicator color="white" style={styles.activityIndicator}/>
        );
    }

    renderFooter() {
        return (
            this.props.isRefreshing ? null :
                <View style={styles.footer}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={this.loadMore}
                        style={styles.loadMoreBtn}>
                        <Text style={styles.btnText}>Load More</Text>
                        {this.props.isLoadingMore ? this.renderActivityIndicator() : null}
                    </TouchableOpacity>
                </View>
        );
    }

    render() {
        return (
            <View style={styles.listContainer}>
                <FlatList data={this.props.users}
                          refreshControl={this.renderRefreshControl()}
                          renderItem={({item}) => this.renderItem(item)}
                          ListFooterComponent={this.renderFooter}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loadMoreBtn: {
        padding: 10,
        backgroundColor: 'lightgrey',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    activityIndicator: {
        marginLeft: 10,
    },
});

function mapStateToProps(state) {
    return {
        users: state.users.usersList,
        isRefreshing: state.users.isRefreshing,
        isLoadingMore: state.users.loadingMoreUsers,
    };
}

export default connect(mapStateToProps)(Users);
