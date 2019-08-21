import React, { useState } from 'react';
import InputForm from './Components/ControlledInput/ControlledInput';
import Memo from './Components/Memo/Memo';
import Btn from './Components/Btn/Btn';
import ValidationError from './Components/ValidationErrors/ValidationError';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {

  // state for memo and memoErrors 
  const [memo, setMemo] = useState('')
  const [editVal, setEditVal] = useState('')
  const [editedMemoVal, setEditedMemoVal] = useState('')
  const [memoError, setErrors] = useState('')
  const [memoList, setMemos] = useState([]);
  const [formVisible, setFormVisiblity] = useState(false)

  // font awesome icons
  const  pencilIcon = <FontAwesomeIcon icon={faPencilAlt} className='pencil-icon' />;
  const trashIcon = <FontAwesomeIcon icon={faTrashAlt} className='trash-icon' />;
  const fireIcon = <FontAwesomeIcon icon={faFireAlt} className='file-icon' />;
  
  // updates everytime user enters a character into new memo input
  // updates 'memo' state variable
  //validates user input
  const handleNameChange = function (e) {
    setMemo(e.target.value)
    checkError(e.target.value)
  }

  const handleEditChange = function (e) {
    setEditedMemoVal(e.target.value)
    checkError(e.target.value)
  }


  // memo submit
  //fires addMemo and clear memo input
  const handleSubmit = (e) => {
    e.preventDefault();
    addMemo()
    setMemo('')
  }

  //creates and adds new memos to memoList
  const addMemo = () => {
    setMemos([
      ...memoList,
      {
        id: memoList.length + 1,
        value: memo
      }]);
  };

  //deletes memos
  const deleteMemo = (id) => {
    let newArr = memoList.filter(memo => memo.id !== id)
    setMemos(newArr)
    setFormVisiblity(false)
  };

  // displays the memo edit form 
  const editMemo = (id) => {
    setEditVal(id)
    setFormVisiblity(true)
  };

  // updates memo
  // hides memo edit form
  const replaceMemo = (e) => {
    e.preventDefault()

    let newArr = memoList.map(memo => {
      if (memo.id === editVal) {
        memo.value = e.target.edit.value
      }
      return memo
    })
    setMemos(newArr)
    setFormVisiblity(false)
  }

  //validates user input 
  //conditionally sets error message
  const checkError = (e) => {
    (e.length >= 1 && e.length <= 3)
      ? setErrors('Input must be longer than 3 characters!!!')
      : setErrors('')
  }

  // disables submit button 
  const disabler = () => {
    return (memoError !== "" || memo.length === 0)
  }

  // Renders list of memos
  const renderMemos = () => {
    let list;
    if (memoList.length > 0) {
      list = memoList.map(memo => {
        return <li key={memo.id}><Memo memVal={memo.value}>
          <div className="memo-grid">
            <Btn trashIcon={trashIcon} id={memo.id} name="Delete" click={deleteMemo}></Btn>
            <Btn pencilIcon={pencilIcon} id={memo.id} name="Edit" click={editMemo}></Btn>
          </div>

        </Memo></li>
      })
    } else {
      list = "Your First Memo Goes Here..."
    }
    return list
  }

  // renders edit form
  const renderEditForm = () => {
    if (formVisible) {
      return <form onSubmit={(e) => replaceMemo(e)} className="edit-form">
        <h3>Edit Your Memo</h3>
        <ValidationError error={memoError}></ValidationError>
        <input type="text" placeholder="Enter memo" name="edit" onChange={(e)=>handleEditChange(e)}></input>
        {/* <FormSubmitBtn type="submit" memo={editedMemoVal} memoError={memoError} pencilIcon={pencilIcon} click={replaceMemo} name="SUBMIT"></FormSubmitBtn> */}
        <button type="submit" className={memoError !== "" || editedMemoVal.length < 3 ? "disabled form-submit-btn btn-shadow" : "visible form-submit-btn btn-shadow"}>{pencilIcon} SUBMIT</button>
      </form>
    } else {
      return null
    }
  }

  // renders initial "add a memo" form
  const renderMemoForm = () => {
    if (!formVisible) {
      return <InputForm
        nameChange={handleNameChange}
        submit={handleSubmit}
        errorCheck={checkError}
        memo={memo}
        memoError={memoError}
        disabler={disabler}
        name="memo"
        icon={fireIcon}
      >
      </InputForm>
    }
  }

  // returns JSX
  return (
    <div className="App">
      {/* Memo Edit Form */}
      {renderEditForm()}
      {/* Memo Form */}
      {renderMemoForm()}
      <hr></hr>
      {/* MemoList */}
      <ul className="memos-grid">
        {renderMemos()}
      </ul>
    </div>
  );
}

export default App;
