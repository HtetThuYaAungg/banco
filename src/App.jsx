import React,{useState} from 'react'
import Todo1 from './components/Todo1'
import './App.css';
import Todo  from './components/Todo';
import Counter from './components/Counter';
import ShowName from './components/ShowName';
import FaqItem from './components/FaqItem';
const App = () => {

  const[faqLists,setFaqList] = useState([
    {
      id : 1,
      question : "Question 1",
      answer : "Answer 1",
      showAnswer:false,
    },
    {
      id : 2,
      question : "Question 2",
      answer : "Answer 2",
      showAnswer:false,
    },
    {
      id : 3,
      question : "Question 3",
      answer : "Answer 3",
      showAnswer:false,
    },
    {
      id : 4,
      question : "Question 4",
      answer : "Answer 4",
      showAnswer:false,
    },
  ]);

  const [count,setCount] =useState(5);

  function openAnswer(id){
    setFaqList(faqLists.map((faqList)=> {
      if(faqList.id === id){
        faqList.showAnswer = !faqList.showAnswer;
      }else{
        faqList.showAnswer = false;
      }
      return faqList;
    }))
  }

  function increaseCount(){
    setCount(count+1);
  }

  function decreaseCount(){
    setCount(count-1)
  }

  function changeCount(x,y){
    console.log(x,y);
}

  return (
    <>
    <Todo1/>
    
     {/* {faqLists.map((faqList)=>(
      <FaqItem key={faqList.id} openAnswer={openAnswer} faqList={faqList} />
    ))} */}
    {/* <Counter start={count} increaseCount={increaseCount} decreaseCount={decreaseCount}/>
    <Counter start={count} increaseCount={increaseCount} decreaseCount={decreaseCount}/>
    <Counter start={count} increaseCount={increaseCount} decreaseCount={decreaseCount}/> */}
    </>

  )
}

export default App