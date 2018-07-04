/*********** Routes for applications **************/
import React from "react";
import { Route,Switch } from "react-router-dom";
import AppRoute from "./AppRoute";
import Demo from '../container/Demo';
import NotFound from "../components/NotFound"; 
import {frontLayout, dashboardLayout} from "../components/Layouts";

const Routers = ({store, history}) => {
	const state = store.getState(); 
	console.log(history.location.pathname)
	 /*********** Check authentications ***********/
    const requireAuth = () => {
        if(!state.user.loggedIn && history.location.pathname !== "/") {
           history.push( "/");
        } else if(state.user.loggedIn && history.location.pathname === "/"){
           history.push( "/dashboard");
        }
    };

	 return (
        <div>
            <Switch> 
				 <AppRoute  
                        exact={true} 
                        path="/" 
                        component={Demo} 
                        requireAuth={() => false}
                        layout={frontLayout} 
                    />
                    <AppRoute 
                        exact
                        path="*" 
                        component={NotFound}
                        requireAuth={()=> false} 
                        layout={frontLayout}                                
                    />
			</Switch>
        </div>
    );
};

export default Routers;
