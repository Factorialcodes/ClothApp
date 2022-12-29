import React from 'react'
import CollectionItem from '../collection-item/collection-items.components'
import './PreviewItem.styled.css'


const PreviewItem =({title ,items})=>(
    <div className="collection-preview">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {items
            .filter((item, idx)=> idx < 4)
            .map( ({id, ...OtherItemProps}) => (
                <CollectionItem key={id}{...OtherItemProps} />       
                // console.log(...OtherCollections)  
                ))}
        </div>
    </div>
)

export default PreviewItem