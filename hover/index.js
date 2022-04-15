const iconBox = document.getElementsByClassName('bottom');
const textBox = document.querySelector('.top');
const mainText = textBox.querySelector('h1')
const emoticon =  iconBox.item(HTMLCollection);

//이모티콘
const bag = emoticon.firstElementChild;
const message = emoticon.lastElementChild;
const search = emoticon.childNodes[3];

//펑션

const superEventHandler ={
bag: function(event){
    event.preventDefault();
    mainText.innerText = "구매하기";
},
search: function(event){
    event.preventDefault();
    mainText.innerText = "자세히 보기";
},
message: function(event){
    event.preventDefault();
    mainText.innerText = "문의하기";
},
leave: function(event){
    event.preventDefault();
    mainText.innerText = mainText;
}
};
//이벤트

bag.addEventListener("mouseover", superEventHandler.bag);
message.addEventListener("mouseover",superEventHandler.message);
search.addEventListener("mouseover",superEventHandler.search);
emoticon.addEventListener("mouseleave", superEventHandler.leave);

Init();