let ani=["ヒューマン","モダン","草食","肉食"]
let rob=["箱","球函ベース","ホイールベース","四輪","二足","四足"]
let lim=["尻尾","翼","ボーンスパイク","パンチャー","触手","爪","ソードハンド","ハンマーハンド","槍の手"]

let bas=[...ani,...rob]
cl(bas.length)

let tor=["人型","草食","肉食"]
let hea=["人型","現代","草食","肉食","プラズマ","地獄","爬虫"]

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
let b2="<div class='btn btn-warning'>胴体: "+obj.t+"</div>"
let b3="<div class='btn btn-danger'>頭: "+obj.h+"</div>"
let b4="<div class='btn btn-success'>四肢: "+obj.l+"</div>"

for(j=0;j<7;j++){stA(inp[j],"value",b1+b2+b3+b4)
}

let hval=gCl("name")[0]
cl(hval.value)


