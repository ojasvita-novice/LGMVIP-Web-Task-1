const todoList=[
{
name:'complete Hannibal series',
dueDate:'06-06-23'
},

{
  name:'cuddle with cat',
  dueDate:'06-06-23'
  },

  {
    name:'water plants',
    dueDate:'07-06-23'
    },

      {
        name:'do laundry',
        dueDate:'07-06-23'
        },

];

renderList();

function renderList()
{

let todoListHTML='';

todoList.forEach(function(todoObject,index)
{
  // const todoObject=todoList[i]; todoObject declared as parameter
  // const name=todoObject.name;
  // const dueDate=todoObject.dueDate;
  const { name, dueDate}=todoObject;
  // console.log(todoObject);

  // onclick="todoList.splice(${index},1);renderList();" ****EVENT ADDED
  const html=`<div>${name}</div>
   <div>${dueDate}</div>  
  <button class="delete delete_list">
  <i class="fa-solid fa-square-xmark fa-2xl" style="color: #ff0000;"></i></button>`; //generating html
  todoListHTML+=html;

});   

// console.log(todoListHTML);

document.querySelector('.todolist_1').innerHTML=todoListHTML;


document.querySelectorAll('.delete_list').forEach((deleteButton,index)=>
{
  
  deleteButton.addEventListener('click', ()=>
  { 
    todoList.splice(index,1);
    renderList();

  });


});

}


document.querySelector('.add_list').addEventListener('click',()=>
{
  todo();

});



// console.log(todoList);

function todo()
{
  const nameinputElement=document.querySelector('.name-input');
  const name=nameinputElement.value;
  const dateInputElement=document.querySelector('.due-date');
  const dueDate= dateInputElement.value;


  todoList.push({//name: name,dueDate: dueDate
  name,dueDate});
 
  nameinputElement.value='';

  renderList();
 
}




