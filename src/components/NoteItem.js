import React from 'react';
import './NoteItem.styles.scss';

const NoteItem = ({title,category,content,like, onItemClicked}) => {
  return (
    <div className='NoteItem__container'
      role="button"
      onClick={onItemClicked}
      >
          <h2 className="conColor">{title}</h2>
          <p className="conColor">{category}</p>
          <p className="conColor">{content}</p>
    </div>
  )
}

export default NoteItem
