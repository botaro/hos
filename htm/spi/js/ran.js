let ani=["ヒューマン","モダン","草食","肉食"]
let robl=6
let bosl=5
let liml=9
let rob=[],bos=[],lim=[]

for(j=0;j<robl;j++)rob.push("ロボット"+(j+1) )
for(j=0;j<bosl;j++)bos.push("ボス"+(j+1) )
for(j=0;j<liml;j++)lim.push("うで"+(j+1) )
let bas=[...ani,...rob,...bos]
cl(bas.length)

let tor=["ヒューマン","草食","肉食"]
let hea=["ヒューマン","モダン","草食","肉食","プラズマ"]

let ra1=Math.floor(Math.random()*bas.length)
let ra2=Math.floor(Math.random()*tor.length)
let ra3=Math.floor(Math.random()*hea.length)
let ra4=Math.floor(Math.random()*lim.length)

let q1=bas[ra1] 
let q2=tor[ra2] 
let q3=hea[ra3] 
let q4=lim[ra4] 

let obj={b:q1,t:q2,h:q3,l:q4
}
cl(obj)

let inp=gCl("name")
let b1="<div class='btn btn-info'>ベース: "+obj.b+"</div>"
let b2="<div class='btn btn-warning'>体: "+obj.t+"</div>"
let b3="<div class='btn btn-danger'>頭: "+obj.h+"</div>"
let b4="<div class='btn btn-success'>腕: "+obj.l+"</div>"

for(j=0;j<7;j++){stA(inp[j],"value",b1+b2+b3+b4)
}



