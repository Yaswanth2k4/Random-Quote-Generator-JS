const header=document.createElement('header');
header.innerText="Random Quote Generator";
document.body.appendChild(header);

const bodyCont=document.createElement("div");
bodyCont.className="bodycont";
document.body.appendChild(bodyCont);

const date=new Date();
var hours=date.getHours();
var minutes=date.getMinutes();
const greeting=document.createElement('p');
greeting.className="greeting";

if(hours>=6 && hours<=11)
{
    greeting.innerText="Let's start our morning with a new quote";
}

else if(hours>=12 && hours<=17)
{
    greeting.innerText="Let's start our afternoon with a new quote";
}

else if(hours>=18 && hours<=20)
{
    greeting.innerText="Let's start our evening with a new quote";
}
else
{
    greeting.innerText="Let's start our night with a new quote";
}
bodyCont.appendChild(greeting);

const container=document.createElement('div');
container.className='container';
bodyCont.appendChild(container);

const quotebox=document.createElement('div');
quotebox.className='quotebox';
container.appendChild(quotebox);

const quotes=[
    "''Don't let your happiness depend on something"+"\n\n"+
    " you may lose''"+"\n"+"                                                      -C. S. Lewis",
    "''Amateurs sit and wait for inspiration, the rest"+"\n\n"+
    "of us just get up and go to work.''"+"\n"+"                                                    – Stephen King",
    "''Self-awareness and self-love matter. Who we"+"\n\n"+
     "are is how we lead.''"+"\n"+ "                                                  – Brene Brown",
    "''All the world's a stage, and all the men and"+"\n\n"+
     "women merely players.''"+"\n"+"                                       – William Shakespeare",
     "''Appreciation is a wonderful thing. It makes"+"\n\n"+
      "what is excellent in others belong to us as well.''"+"\n"+"                                                          – Voltaire",
      "''That it will never come again is what makes life"+"\n\n"+
      " so sweet.''"+"\n"+ "                                               – Emily Dickinson",
    "''The strongest principle of growth lies in the"+"\n\n"+
     "human choice''"+"\n"+"                                                – George Eliot",
     "''The most common way people give up their"+"\n\n"+
     "power is by thinking they don't have any.''"+"\n"+"                                                   – Alice Walker",
    "''Focus more on your desire than on your doubt,"+"\n\n"+
    "and the dream will take care of itself.''"+"\n"+"                                                      – Mark Twain",
    "To live is the rarest thing in the world. Most"+"\n\n"+
    "people exist, that is all.''"+"\n"+"                                               – Oscar Wilde"
];

const colors=["green","lightblue","orange","violet","SlateBlue","DodgerBlue","tomato","red","olive","cadetblue"];

var quote=document.createElement('pre');
quote.className='quote';
quote.innerText=quotes[0];
quotebox.appendChild(quote);
var rand=0;

const button=document.createElement('button');
button.className='button';
button.innerText="New Quote";
button.addEventListener('mouseover',function(){
    button.className='buttonOver';
});
button.addEventListener('mouseout',function(){
    button.className='button';
});
container.appendChild(button);
button.addEventListener("click",function(){

    rand=Math.floor(Math.random()*10);
    quote.innerHTML=quotes[rand];
    quote.style.color=colors[rand];

    button.addEventListener('mouseover',function(){
    button.style.backgroundColor='black';
    });

    button.addEventListener('mouseout',function(){
    button.style.backgroundColor=colors[rand];
    });
    button.style.backgroundColor=colors[rand];
    bodyCont.style.backgroundColor=colors[rand];
    quotebox.appendChild(quote);
});
