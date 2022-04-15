const iconBox = document.getElementsByClassName('bottom');
const textBox = document.querySelector('.top');
const mainText = document.querySelector('h1');
const goodsText =document.querySelector('h1').innerHTML;
const emoticon =  iconBox.item(HTMLCollection);


//이모티콘
const bag = emoticon.firstElementChild;
const message = emoticon.lastElementChild;
const search = emoticon.childNodes[3];

//펑션

const superEventHandler = {
bag: function(){
    mainText.innerText = "구매하기";
},
search: function(){
    mainText.innerText = "자세히 보기";
},
message: function(){
    mainText.innerText = "문의하기";
},
leave: function(){
    mainText.innerText = goodsText;
}
};
//이벤트

bag.addEventListener("mouseover", superEventHandler.bag);
message.addEventListener("mouseover",superEventHandler.message);
search.addEventListener("mouseover",superEventHandler.search);
emoticon.addEventListener("mouseleave", superEventHandler.leave);

