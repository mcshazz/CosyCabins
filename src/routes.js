import React from "react";
import { Route } from 'react-router-dom'
import Carousel  from './Carousel'
import Cabin from './Cabin.js'
import Landing from './Landing.js'
import Lightbox from './Lightbox.js'

export default [


         
            <Route key="carousel" path="/carousel" component={Carousel} />,       
			<Route key="landing" path="/landing" component={Landing} />,      
			<Route key="dublin" path="/dublin" render={(props) => <Lightbox {...props} place="Dublin" />}               />

			

			
            ]