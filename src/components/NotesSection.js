import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NoteItem from './NoteItem';
import inputActions from '../redux/actions/inputActions';
import './NotesSection.style.scss';

const NotesSection = () => {
const dispatch = useDispatch();
const notes = useSelector(state => state.notes.notes)
const [like, setCount] = useState(0);//inouo

const onItemClicked =(item, index) => {
  dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputCategory(item.category));
  dispatch(inputActions.setInputContent(item.content));
    dispatch(inputActions.setInputLike(item.like));
    }
    const onItemLike = (item, index) => {
        setCount(item.like++)
    }
    const onItemDislike = (item, index) => {
        setCount(item.like--)
    }
if(notes.length ===0){
    return (
        <div className='NotesSection__container__empty'>
            <p>There is no notes available.</p>
        </div>
    )
}  

return (
    <div className='NotesSection__container'>
      
      


      {notes.map((item,index)=>{
        if(item){
          return (
            <>
                  <div><div
                      className='InputSection__container__btnWrapper'
                  >
                      <p>You liked {item.like} times</p>
                      <button id="btn" className="button-9" role="button"

                          onClick={() => onItemLike(item, index)}>
                Like
              </button>
                      <button className="button-9" role="button"
                          style={{
                              marginLeft: '1em'
                              , backgroundColor: 'red'
                          }}
                          onClick={() => onItemDislike(item, index)}>
                          Dislike
                      </button>
            </div></div>
            <NoteItem 
                      title={item.title}
                      category={item.category}
                      content={item.content}
            // content= {item.content}
            onItemClicked={() =>{
              onItemClicked(item, index);
            }}
            
        />
        </>
          )
        }
        return null;
      }
        
      )}
      
    </div>
  );
};

export default NotesSection
