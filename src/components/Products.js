import React from 'react';
import {
    FlatList,
    ActivityIndicator,
    Text,
    View,
    RefreshControl,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import ProductItem from './ProductItem';
import {connect} from 'react-redux';
import {getProducts, loadMoreProducts} from '../redux/actions/products';

class Products extends React.Component {

    static navigationOptions = {
        title: 'Products',
    };

    constructor(props) {
        super(props);
        this.handleClickProduct = this.handleClickProduct.bind(this);
        this.refresh = this.refresh.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.loadMore = this.loadMore.bind(this);    }

    componentDidMount(): void {
        this.props.dispatch(getProducts());
    }

    handleClickProduct(product) {
        this.props.navigation.navigate('ProductDetails', {product});
    }

    refresh() {
        this.props.dispatch(getProducts());
    }

    loadMore() {
        this.props.dispatch(loadMoreProducts({
            currentProductsCount: this.props.products.length,
        }));
    }

    renderRefreshControl() {
        return (
            <RefreshControl refreshing={this.props.isRefreshing}
                            onRefresh={this.refresh}/>
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

    renderItem(item) {
        return (
            <ProductItem item={item}
                         onItemClick={this.handleClickProduct}/>
        );
    }

    renderActivityIndicator() {
        return (
            <ActivityIndicator color="white" style={styles.activityIndicator}/>
        );
    }

    render() {
        return (
            <View style={styles.listContainer}>
                <View style={styles.listContainer}>
                    <FlatList data={this.props.products}
                              refreshControl={this.renderRefreshControl()}
                              renderItem={({item}) => this.renderItem(item)}
                              ListFooterComponent={this.renderFooter}
                    />
                </View>
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
        products: state.products.productsList,
        isRefreshing: state.products.isRefreshing,
        isLoadingMore: state.products.isLoadingMore,
    };

}

export default connect(mapStateToProps)(Products);
