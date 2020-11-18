import React from 'react';

import './collectionpreview.styles.scss'

const CollectionPreview = ({title, items}) => (
  <div className="collection-preview">
    <h1 className="title">{ title.toUppercase() }</h1>
    <div className="preview">
      {
        items.map((item) => (
          <div key = {item.id}>{item.name}</div>
        ))
      }
    </div>
  </div>
);

export default CollectionPreview;
