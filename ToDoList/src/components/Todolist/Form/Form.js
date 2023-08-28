import React, {useState, useEffect} from "react";
import './form.scss'
const Form = ({ onSubmit, editTodo }) => {
    const [input, setInput] = useState(editTodo ? editTodo.text : '');
  
    useEffect(() => {
      if (editTodo) {
        setInput(editTodo.text);
      }
    }, [editTodo]);
  
    const handleChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      onSubmit({
        id: editTodo ? editTodo.id : Math.floor(Math.random() * 10000),
        text: input,
      });
  
      setInput('');
    };
  
    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add your Tasks"
            value={input}
            name="text"
            onChange={handleChange}
          />
          <button>{editTodo ? 'Update' : 'Add'} ➕</button>
        </form>
      </>
    );
  };
  export default Form