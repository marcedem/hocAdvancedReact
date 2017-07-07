import React, { Component } from 'react';
import { connect } from 'react-redux';
 

// Implementation of Higher Order Compoment
export default function(ComposedComponent){

    // Normal react component sart here
    class Authentication extends Component{
        render(){
            console.log(this.props.resources); //  => resourceList
            console.log('User authenticated: ', this.props.authenticated); //  => resourceList
            // console.log('Rendering', ComposedComponent); 
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