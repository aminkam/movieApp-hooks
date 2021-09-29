import React from 'react'

const InfoOfTheMovie = ({match,movieLists}) => {
    
    let itemObject=movieLists.find(el=>el.id===Number(match.params.id))
    return (
        <div className="info-pages">
            <img src={itemObject.image} alt="" />
            <p className="info-p">{itemObject.name}</p>
            
        </div>
    )
}

export default InfoOfTheMovie
