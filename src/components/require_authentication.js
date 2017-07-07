import React, { COmponent } from 'react';

// Implementation of Higher Order Compoment
export default function(ComposedComponent){

    // Normal react component sart here
    class Authentication extends Component{
        render(){
            console.log(this.props.resources); //  => resourceList
            return <ComposedComponent { ...this.props } />
        }    
    }

    return Authentication
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