import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
// import { itemsFetchData } from '../actions/items';
import { loginFetchData } from '../actions/login';



class Login extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:8000/api/login','POST','username=admin&password=admin');
        // this.props.fetchData('http://localhost:8000/api/login','POST',data);
    }

    render() {
        if (this.props.loginhasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.loginisLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.loginitems.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}

Login.propTypes = {
    fetchData: PropTypes.func.isRequired,
    loginitems: PropTypes.array.isRequired,
    loginhasErrored: PropTypes.bool.isRequired,
    loginisLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        loginitems: state.items,
        loginhasErrored: state.itemsHasErrored,
        loginisLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(loginFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
