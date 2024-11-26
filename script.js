var a=document.getElementById('box1');
var b=document.getElementById('box2');
var c=document.getElementById('box3');
var d=document.getElementById('box4');
var e=document.getElementById('box5');
var f=document.getElementById('box6');var g=document.getElementById('box7');var h=document.getElementById('box8');var i=document.getElementById('box9');
var j=0;
var k=0;
var ty=[1,2,3,4,5,6,7,8,9];
var p=document.getElementById('demo');
var p1=document.getElementById('game');
var p2=document.getElementById('demo1');
var rema=document.getElementById('margin');
var mona=document.getElementById('X');
var sona=document.getElementById('O');
var remas=document.getElementById('margin1');
var monas=document.getElementById('Player');
var sonas=document.getElementById('Comp');
var boy=document.getElementById('boy');
var boy1=document.getElementById('boy1');
var gen=document.getElementById('gen');
var web=document.getElementById('web');

var count1=0;
var count2=0;
var count=0;
var turn=0;
var kali=0;
var fip="";
var fic="";
var option=0;
setTimeout(log,2000);
function log()
{ logo.style.display="none";
  remas.style.display="block";
  monas.style.display="block";
  sonas.style.display="block";
  web.style.display="block";
  

 }
function reload()
{ window.location.reload();
}
function cosx1()
{ option=1;
  rema.style.display="block";
  mona.style.display="block";
  sona.style.display="block";
  remas.style.display="none";
  monas.style.display="none";
  sonas.style.display="none";

}
function sinx1()
{ option=2;
  rema.style.display="block";
  mona.style.display="block";
  sona.style.display="block";
  remas.style.display="none";
  monas.style.display="none";
  sonas.style.display="none";

}
function cosx()
{ fip="X";
  fic="O";
  p1.style.display="flex";
  rema.style.display="none";
  mona.style.display="none";
  sona.style.display="none";
  boy.style.display="flex";
  boy1.style.display="none";
  if(option==1)
  {
  boy.innerHTML="Player start "+fip+" turn first";
  }
  if(option==2)
  { boy.innerHTML=fip+" turn";
  }
  turn=0;
  kali=0;

  
}
function sinx()
{ fip="O";
  fic="X";
  p1.style.display="flex";
  rema.style.display="none";
  mona.style.display="none";
  sona.style.display="none";
  boy.style.display="flex";
   boy1.style.display="none";
  if(option==1)
  {
  boy.innerHTML="Player start "+fip+" turn first";
  }
  if(option==2)
  { boy.innerHTML=fip+" turn";
  }
  turn=1;
  kali=0;
  
}
function win()
{ var koys=3;
  if((a.innerText==fip && b.innerText==fip && c.innerText==fip)||(d.innerText==fip && e.innerText==fip && f.innerText==fip)||(g.innerText==fip && h.innerText==fip && i.innerText==fip)||(a.innerText==fip && e.innerText==fip && i.innerText==fip)||(c.innerText==fip && e.innerText==fip && g.innerText==fip)||(a.innerText==fip && d.innerText==fip && g.innerText==fip)||(b.innerText==fip && e.innerText==fip && h.innerText==fip)||(c.innerText==fip && f.innerText==fip && i.innerText==fip))
  { if(option==1)
    {
    p.innerHTML="Player("+fip+")<br>"+"&nbsp&nbsp&nbsp Win";
      boy.style.display="none";
    boy1.style.display="none";
    gen.style.display="block";
    }
    if(option==2)
    { p.innerHTML=fip+" is Winner";
      boy.style.display="none";
    boy1.style.display="none";
      gen.style.display="block";
    }
    p.style.display="flex";
    p1.style.display="none";
    p2.style.display="block";
    boy.style.display="none";
    boy1.style.display="none";
    koys=1;
    gen.style.display="block";
  }
 else if((a.innerText==fic && b.innerText==fic && c.innerText==fic)||(d.innerText==fic && e.innerText==fic && f.innerText==fic)||(g.innerText==fic && h.innerText==fic && i.innerText==fic)||(a.innerText==fic && e.innerText==fic && i.innerText==fic)||(c.innerText==fic && e.innerText==fic && g.innerText==fic)||(a.innerText==fic && d.innerText==fic && g.innerText==fic)||(b.innerText==fic && e.innerText==fic && h.innerText==fic)||(c.innerText==fic && f.innerText==fic && i.innerText==fic))
  { if(option==1)
    {
    p.innerHTML="Computer("+fic+")<br>"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Win";
      boy.style.display="none";
    boy1.style.display="none";
    gen.style.display="block";
    }if(option==2)
    { p.innerHTML=fic+" is Winner";
      boy.style.display="none";
    boy1.style.display="none";
      gen.style.display="block";
    }
    p.style.display="flex";
    p1.style.display="none";
    p2.style.display="block";
    boy.style.display="none";
    boy1.style.display="none";
      gen.style.display="block";
    koys=2;
    
  }
 if((count1==5)&&(count2==4)&&koys==3)
  { if(option==1)
    {
    p.innerHTML="Draw";
      boy.style.display="none";
    boy1.style.display="none";
  gen.style.display="block";
    }
    if(option==2)
    {
    p.innerHTML="Draw";
      boy.style.display="none";
    boy1.style.display="none";
    gen.style.display="block";
    }
    p.style.display="flex";
    p1.style.display="none";
    p2.style.display="block";
    boy.style.display="none";
    boy1.style.display="none";
    gen.style.display="block";
  }

 
}

function aoc()
{ if(option==1)
  {   
  boy1.style.display="flex";
  boy.style.display="none";
  count1++;
 a.innerHTML=fip;
    
  boy1.innerHTML="Computer "+fic+" turn";
  win();
  let ao=a.getAttribute("data-title");
  for(let i=0;i<ty.length;i++)
    { if(ao==ty[i])
      { ao=i;
        break;
      }
    }
    for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=true;
     }

   let fg=ty.splice(ao,1);
  let length=ty.length;
  j=Math.floor(Math.random()*length);
  let co=ty[j];
 var r=document.getElementById('box'+co);
  function aorda()
    {
  r.innerHTML=fic;
      count2++;
  r.disabled=true;
  a.disabled=true;
  let fr=ty.splice(j,1);
      
      boy1.style.display="none";
  boy.style.display="flex";
      boy.innerHTML="Player "+fip+" turn";
  for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=false;
     }
      boy1.innerHTML='';
    win();
 
    }
     setTimeout(aorda,1000);
  }
  if(option==2)
  { if(kali%2==0)
    { a.innerHTML=fip;
     
   boy.innerHTML=fic+" turn";
  
       count1++;
     a.disabled=true;
      win();
    }
   if(kali%2!=0)
    { a.innerHTML=fic;
      boy.innerHTML=fip+" turn";
       count2++;
      a.disabled=true;
      win();
    }
    kali++;
   
  }
  
    
 }

function boc()
{ if(option==1)
  { 
  boy1.style.display="flex";
  boy.style.display="none";
  count1++;
 b.innerHTML=fip;
     boy1.innerHTML="Computer "+fic+" turn";
    
  win();
  let ao=b.getAttribute("data-title");
  for(let i=0;i<ty.length;i++)
    { if(ao==ty[i])
      { ao=i;
        break;
      }
    }
    for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=true;
     }
 
   let fg=ty.splice(ao,1);
  
  let length=ty.length;
  j=Math.floor(Math.random()*length);
  let co=ty[j];

 var r=document.getElementById('box'+co);
    function aorda()
    {
  r.innerHTML=fic;
      count2++;
  r.disabled=true;
  b.disabled=true;
  let fr=ty.splice(j,1);
  
      boy1.style.display="none";
  boy.style.display="flex";
      boy.innerHTML="Player "+fip+" turn";
  for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=false;
     }
      boy1.innerHTML='';
    win();
    }
     setTimeout(aorda,1000);
  
   
    
       
    
    
    
  
  }
    if(option==2)
  { if(kali%2==0)
    { 
      b.innerHTML=fip;
      boy.innerHTML=fic+" turn";
       count1++;
     b.disabled=true;
     
      win();
    }
  if(kali%2!=0)
    { 
      b.innerHTML=fic;
      boy.innerHTML=fip+" turn";
       count2++;
      
      b.disabled=true;
      
      win();
    }
    kali++;
    
  }
 }

function coc()
{ if(option==1)
  {
     boy1.style.display="flex";
  boy.style.display="none";
  count1++;
 c.innerHTML=fip;
    boy1.innerHTML="Computer "+fic+" turn";
  win();
  let ao=c.getAttribute("data-title");
    for(let i=0;i<ty.length;i++)
    { if(ao==ty[i])
      { ao=i;
        break;
      }
    }
      for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=true;
     }

  
 let fg=ty.splice(ao,1);
  let length=ty.length;
    j=Math.floor(Math.random()*length);
  let co=ty[j];
  
 var r=document.getElementById('box'+co);
        function aorda()
    {
  r.innerHTML=fic;
      count2++;
 r.disabled=true;
  c.disabled=true;
  let fr=ty.splice(j,1);
      
      boy1.style.display="none";
  boy.style.display="flex";
      boy.innerHTML="Player "+fip+" turn";
  for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=false;
     }
      boy1.innerHTML='';
    win();
    }
     setTimeout(aorda,1000);
  
      
 
      
  }
    if(option==2)
  { if(kali%2==0)
    { c.innerHTML=fip;
      boy.innerHTML=fic+" turn";
       count1++;
        
      c.disabled=true;
      win();
    }
    if(kali%2!=0)
    { c.innerHTML=fic;
      boy.innerHTML=fip+" turn";
       count2++;
       
      c.disabled=true;
      win();
    }
    kali++;
  }
 }

function doc()
{ if(option==1)
  {
    boy1.style.display="flex";
  boy.style.display="none";
  count1++;
 d.innerHTML=fip;
    boy1.innerHTML="Computer "+fic+" turn";
  win();
  let ao=d.getAttribute("data-title");
    for(let i=0;i<ty.length;i++)
    { if(ao==ty[i])
      { ao=i;
        break;
      }
    }
      for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=true;
     }

   let fg=ty.splice(ao,1);
let length=ty.length;
  j=Math.floor(Math.random()*length);
  let co=ty[j];
  
 var r=document.getElementById('box'+co);
        function aorda()
    {
  r.innerHTML=fic;
      count2++;
  r.disabled=true;
  d.disabled=true;
  let fr=ty.splice(j,1);
  
      boy1.style.display="none";
  boy.style.display="flex";
      boy.innerHTML="Player "+fip+" turn";
  for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=false;
     }
      boy1.innerHTML='';
    win();
    }
     setTimeout(aorda,1000);
  
      
  }
    if(option==2)
  { if(kali%2==0)
    { d.innerHTML=fip;
      boy.innerHTML=fic+" turn";
       count1++;
     
      d.disabled=true;
      win();
    }
    if(kali%2!=0)
    { d.innerHTML=fic;
      boy.innerHTML=fip+" turn";
       count2++;
      
      d.disabled=true;
      win();
    }
    kali++;
  }
 }

function eoc()
{ if(option==1)
  {boy1.style.display="flex";
  boy.style.display="none";
    count1++;
 e.innerHTML=fip;
    boy1.innerHTML="Computer "+fic+" turn";
  win();
  let ao=e.getAttribute("data-title");
    for(let i=0;i<ty.length;i++)
    { if(ao==ty[i])
      { ao=i;
        break;
      }
    }
      for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=true;
     }

 
   let fg=ty.splice(ao,1);
let length=ty.length;
  j=Math.floor(Math.random()*length);
  let co=ty[j];
  
 var r=document.getElementById('box'+co);
        function aorda()
    {
  r.innerHTML=fic;
      count2++;
  r.disabled=true;
  e.disabled=true;
  let fr=ty.splice(j,1);
      
      boy1.style.display="none";
  boy.style.display="flex";
      boy.innerHTML="Player "+fip+" turn";
  for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=false;
     }
      boy1.innerHTML='';
    win();
    }
     setTimeout(aorda,1000);
  
      
  }
    if(option==2)
  { if(kali%2==0)
    { e.innerHTML=fip;
      boy.innerHTML=fic+" turn";
       count1++;
      e.disabled=true;
      win();
    }
    if(kali%2!=0)
    { e.innerHTML=fic;
      boy.innerHTML=fip+" turn";
       count2++;
      e.disabled=true;
      win();
    }
    kali++;
  }
 }
function foc()
{ if(option==1)
  {boy1.style.display="flex";
  boy.style.display="none";
  count1++;
 f.innerHTML=fip;
    boy1.innerHTML="Computer "+fic+" turn";
  win();
  let ao=f.getAttribute("data-title");
  
  for(let i=0;i<ty.length;i++)
    { if(ao==ty[i])
      { ao=i;
        break;
      }
    }
    for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=true;
     }
  
   let fg=ty.splice(ao,1);
let length=ty.length;
  j=Math.floor(Math.random()*length);
  let co=ty[j];
  
 var r=document.getElementById('box'+co);
      function aorda()
    {
  r.innerHTML=fic;
      count2++;
  r.disabled=true;
  f.disabled=true;
  
  let fr=ty.splice(j,1);
   
    
      boy1.style.display="none";
  boy.style.display="flex";
      boy.innerHTML="Player "+fip+" turn";
  for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=false;
     }
      boy1.innerHTML='';
    win();
    }
     setTimeout(aorda,1000);
  
    
  }
    if(option==2)
  { if(kali%2==0)
    { f.innerHTML=fip;
      boy.innerHTML=fic+" turn";
       count1++;
     f.disabled=true;
      win();
    }
    if(kali%2!=0)
    { f.innerHTML=fic;
      boy.innerHTML=fip+" turn";
       count2++;
      f.disabled=true;
      win();
    }
    kali++;
  }
 }
function goc()
{ if(option==1)
  {boy1.style.display="flex";
  boy.style.display="none";
  count1++;
 g.innerHTML=fip;
    boy1.innerHTML="Computer "+fic+" turn";
  win();
  let ao=g.getAttribute("data-title");
  
  for(let i=0;i<ty.length;i++)
    { if(ao==ty[i])
      { ao=i;
        break;
      }
    }
  for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=true;
     }
   let fg=ty.splice(ao,1);
let length=ty.length;
  j=Math.floor(Math.random()*length);
  let co=ty[j];
  
 var r=document.getElementById('box'+co);
    function aorda()
    {
  r.innerHTML=fic;
      count2++;
  r.disabled=true;
  g.disabled=true;
  
  let fr=ty.splice(j,1);
  
    
      boy1.style.display="none";
  boy.style.display="flex";
      boy.innerHTML="Player "+fip+" turn";
  for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=false;
     }
      boy1.innerHTML='';
    win();
    }
     setTimeout(aorda,1000);
  
    
  }
    if(option==2)
  { if(kali%2==0)
    { g.innerHTML=fip;
      boy.innerHTML=fic+" turn";
       count1++;
     g.disabled=true;
      win();
    }
    if(kali%2!=0)
    { g.innerHTML=fic;
      boy.innerHTML=fip+" turn";
       count2++;
      g.disabled=true;
      win();
    }
    kali++;
  }
 }
function hoc()
{ if(option==1)
  {boy1.style.display="flex";
  boy.style.display="none";
  count1++;
 h.innerHTML=fip;
    boy1.innerHTML="Computer "+fic+" turn";
  win();
  let ao=h.getAttribute("data-title");
    for(let i=0;i<ty.length;i++)
    { if(ao==ty[i])
      { ao=i;
        break;
      }
    }
     for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=true;
     }
   let fg=ty.splice(ao,1);
let length=ty.length;
  j=Math.floor(Math.random()*length);
  let co=ty[j];
  
 let r=document.getElementById('box'+co);
       function aorda()
    {
  r.innerHTML=fic;
      count2++;
  r.disabled=true;
  h.disabled=true;
  
  let fr=ty.splice(j,1);
     
      
      boy1.style.display="none";
  boy.style.display="flex";
      boy.innerHTML="Player "+fip+" turn";
  for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=false;
     }
      boy1.innerHTML='';
    win();
    }
     setTimeout(aorda,1000);
  
      
  }
    if(option==2)
  { if(kali%2==0)
    { h.innerHTML=fip;
      boy.innerHTML=fic+" turn";
       count1++;
      h.disabled=true;
      win();
    }
    if(kali%2!=0)
    { h.innerHTML=fic;
      boy.innerHTML=fip+" turn";
       count2++;
      h.disabled=true;
      win();
    }
    kali++;
  }
 }function ioc()
{ if(option==1)
  {boy1.style.display="flex";
  boy.style.display="none";
  count1++;
 i.innerHTML=fip;
    boy1.innerHTML="Computer "+fic+" turn";
  win();
  let ao=i.getAttribute("data-title");
  
  for(let i=0;i<ty.length;i++)
    { if(ao==ty[i])
      { ao=i;
        break;
      }
    }
    for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=true;
     }
  
   let fg=ty.splice(ao,1);
   let length=ty.length;
  j=Math.floor(Math.random()*length);
  let co=ty[j];

  
  
 let r=document.getElementById('box'+co);
      function aorda()
    {
  r.innerHTML=fic;
      count2++;
  r.disabled=true;
  i.disabled=true;
  let fr=ty.splice(j,1);
   
      boy1.style.display="none";
  boy.style.display="flex";
      boy.innerHTML="Player "+fip+" turn";
  for(let i=0;i<ty.length;i++)
     { let cat=ty[i];        let rose=document.getElementById('box'+cat);
       rose.disabled=false;
     }
      boy1.innerHTML='';
    win();
    }
     setTimeout(aorda,1000);
  
    
  } 
  if(option==2)
  { if(kali%2==0)
    { i.innerHTML=fip;
      boy.innerHTML=fic+" turn";
       count1++;
     i.disabled=true;
      win();
    }
    if(kali%2!=0)
    { i.innerHTML=fic;
      boy.innerHTML=fip+" turn";
       count2++;
      i.disabled=true;
      win();
    }
    kali++;
  }
 }
