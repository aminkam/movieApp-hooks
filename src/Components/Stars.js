

// Another tryyyyyyyyyyyyyyyyyy







// import React from 'react'
// import { FaStar } from 'react-icons/fa'
// import { useState } from 'react/cjs/react.development'

// export default function Stars({totalStars = 5}) {
//     const [selectedStars, setselectedStars] = useState(0)
//     const Star = ({selected = false, onSelect= f => f}) => (
//         <FaStar  color={selected  ? "red" : "grey"} onClick={onSelect} onMouseEnter={()=> sethover(onSelect)} onMouseLeave={()=> sethover(null)}/>);
//     const [hover, sethover] = useState(null)
    
    
    
//     return (
//         <div>
//             {
//                 [...Array(5)].map((n,i) =>(
//                     <Star key={i}
//                     selected={selectedStars > i}
//                     onSelect={()=> setselectedStars(i + 1)}
//                     />
//                 ))}
//                 <p>
//                     {selectedStars} of {totalStars} stars
//                 </p>
//         </div>
//     )
// }
