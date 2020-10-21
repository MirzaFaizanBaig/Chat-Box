 //dom queries
 const chatList =document.querySelector('.chat-list');
 const newChatForm= document.querySelector('.new-chat');
 const newNameForm = document.querySelector('.new-name');
 const updateMsgr = document.querySelector('.update-msgr')
 const rooms = document.querySelector('.chat-rooms');

 //add a new chat
newChatForm.addEventListener('submit',e=>{
  e.preventDefault();
  const msg =newChatForm.message.value.trim();
   userA.addChat(msg)
   .then(()=>newChatForm.reset())
   .catch(err=>console.log(err));
});
 // UPDATE NAME
newNameForm.addEventListener('submit',e=>{
 e.preventDefault();
 // adding new user
 const newName = newNameForm.name.value.trim();
 userA.updateName(newName);
 // reset update name field
  newNameForm.reset();
 // show then hide the update message
  updateMsgr.innerText =`Your name was updated to ${newName}`; 
  setTimeout(()=>updateMsgr.innerText='',3000);
});

 // Updating chat rooms
 rooms.addEventListener('click',(e)=>{
   console.log(e);
   if(e.target.tagName==="BUTTON"){
     console.log(e.target.id);
     chatUI.clear();
    userA.updateRoom(e.target.id);
    userA.getChats(chat=>chatUI.render(chat));
   }
});

 // check local storage for name
 const username =localStorage.username?localStorage.username:'anonymous';


 //class instances
 const chatUI=new ChatUI(chatList);
const userA = new Chatroom('general',username);
// get chats and renderUI
 userA.getChats(data=>{
     console.log(data);
   chatUI.render(data);
 });