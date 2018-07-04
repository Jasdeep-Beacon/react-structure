/*
 * @file: Layouts.js
 * @description: Defined all Layouts for application
 * @date: 04.07.2018
 * @author: Jasdeep Singh
*/

import React from "react"; 

/*************** Front Layout ***************/    
    export const frontLayout = props => (
        <section className="main-content frontend" id="home">    
          <section className="content">
            {props.children}           
          </section>
      </section>
    ); 

    /*************** Dashboard Layout ***************/  
    export const dashboardLayout = props => {
    	let {history} = props.children.props,
    	PAGE_NAME = history.location.pathname.split('/')[1].replace(/-/gi," ");
    	return (
		        <div>		            
		            <div className="content-wrapper">
		                <section className="content-header">
		                  <h1><span></span>{PAGE_NAME.capitalizeEachLetter()}</h1>
		                </section>
		                {props.children}
		           </div>
		        </div>   
    	);
    }
    	