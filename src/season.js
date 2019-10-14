import './display.css';
import React from 'react';

const netSeason = (laty,month)=>{
   console.log(month);
   if(month > 2 && month<9){
        console.log("winter");
        return laty > 0 ? "winter" : "summer";
   }
   else{
      console.log("summer");
        return laty> 0? "summer" : "winter";
   }
}

//functional component
const Season = (props) =>{
   const season = netSeason(props.lat, new Date().getMonth()); 
   const text = season === 'winter' ? 'its chilly outside...Sleep >_<' : 'lets eat ice cream *_*';
   const icon = season === 'winter' ? 'snowflake' : 'sun';
   //console.log(season);
   return (
   <div className={`season-display ${season}`}>
      <i className= {`icon-left massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className= {`icon-right massive ${icon} icon`} />
   </div>
   );
};

export default Season;