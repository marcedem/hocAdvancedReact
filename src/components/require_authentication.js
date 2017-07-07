import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
 

// Implementation of Higher Order Compoment
export default function(ComposedComponent){

    // Normal react component sart here
    class Authentication extends Component{

        // contextTypes is needed in order to avoid abusing of context use in the app
        static contextTypes = {
            router: React.PropTypes.object
        }

        // executed when this component is about to render
        componentWillMount(){
            if(!this.props.authenticated){
                this.context.router.history.push('/');
            }
        }

        // excuted with component is about to be handed a new set of props (state changes)
        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.context.router.history.push('/');
            }
        }

        render(){
            console.log(this.props.resources); //  => resourceList
            console.log('User authenticated: ', this.props.authenticated); //  => resourceList
            console.log('Context', this.context); 
            return <ComposedComponent { ...this.props } /> ;
        }    
    }

    function mapStateToProps(state){
        return { authenticated: state.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}


/**
 *  PSEUDOCODE FOR SCAFFOLDING HOC
 * 
 * In some other location  .. Not in this file
 * we want to use this HOC
 * ## import Authentication ... this is my HOC
 * ## import Resources ... this is the component I want to wrap
 * 
 * ##### A HOC is a function that is call with an existing component #####
 * 
 * ## const ComposedComponent = Authentication(Resources);
 * 
 * 
 * 
 * in some render method ...
 * <ComposedComponent />  // rendering an instance of Authentication
 * 
 * 
 */