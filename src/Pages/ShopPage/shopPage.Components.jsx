import React, { Component } from 'react'
import SHOP_DATA from './shop_data'
import PreviewItem from '../../Components/Preview-Collection/previewItem.components'
import './shopPage.styled.css'

class ShopPage extends Component {

    constructor(props) {
      super(props)
      this.state = {
         collections : SHOP_DATA
      }
    }
  render() {
      const {collections} = this.state;
    return (
      <>
        <div className ='shop-page'>
            {collections.map(({id, ...OtherCollectionProps}) => (
                <PreviewItem key={id} {...OtherCollectionProps} />
            ))}
        </div>
      </>
    )
  }
}

export default ShopPage