import React,{useState} from 'react'

function FaqItem({faqList, openAnswer}) {
    // const [showAnswer ,setShowAnswer] = useState(false);
    const showQuestionBg = faqList.showAnswer? "bg-primary text-white" : "";
  return (
    <div className='m-3'>
        <div 
            onClick={()=>openAnswer(faqList.id)} 
            className={` ${showQuestionBg} d-flex border border-primary rounded p-3 text-primary`}
        >
            {faqList.question}
            <span className={` ms-auto ${faqList.showAnswer ? 'down' : ''}`} > &gt;</span>
            </div>
       {faqList.showAnswer && (
         <div className='p-2 ani-effect'>
         {faqList.answer} Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Voluptate nisi exercitationem molestias sint eos consectetur rerum impedit 
         asperiores ea, animi at temporibus, assumenda deserunt eligendi non. Nemo 
         commodi minima suscipit?

     </div>
       )}
    </div>
  )
}

export default FaqItem