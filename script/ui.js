// render chats templates to the dom
//clear the list of chats when room changes
class ChatUI{
    constructor(list){
        this.list=list;
    }
    clear(){
        this.list.innerHTML = ''; 
    }
    render(d){
        const when =dateFns.distanceInWordsToNow(
            d.created_at.toDate(),
            {addSuffix:true}
        )
        const html =`
        <li class="list-group-item my-1">
        <span class="username">${d.username}:</span>
        <span class="message text-dark">${d.message}</span>
        <div class ="time">${when}</div>
       
        </li>
        `;
        this.list.innerHTML+=html;
    }
}