let sel=a=> document.querySelector(a)
,cl=a=> console.log(a)
,crE=id=> document.createElement(id)
,crT=a=> document.createTextNode(a)
,inH=(e,a)=> e.innerHTML=a
,gCl=n=> document.getElementsByClassName(n)
,gId=id=> document.getElementById(id)
,gTg=id=> document.getElementsByTagName(id)
,clA=(e,a)=> e.classList.add(a)
,clR=(e,a)=> e.classList.remove(a)
,stA=(e,a,b)=> e.setAttribute(a,b)
,dtS=(e,a,b)=> e.dataset.a=b
,apC=(e,a)=> e.appendChild(a)
,rmC=(e,a)=> e.removeChild(a)
,adC=(e,f)=>e.addEventListener("click",f)


