let cl=console.log
let ani=["ヒューマン","モダン","草食","肉食"]
let robl=6
let bosl=5
let liml=9
let rob=[],bos=[],lim=[]

for(j=0;j<robl;j++)rob.push("ロボット"+j)
for(j=0;j<bosl;j++)bos.push("ボス"+j)
for(j=0;j<liml;j++)lim.push("うで"+j)
let bas=[...ani,...rob,...bos]
cl(bas.length)

let tor=["ヒューマン","草食","肉食"]
let hea=["ヒューマン","モダン","草食","肉食","プラズマ"]

let ra1=Math.floor(Math.random()*15)
let ra2=Math.floor(Math.random()*6)
let ra3=Math.floor(Math.random()*3)
let ra4=Math.floor(Math.random()*5)

let q1=ani[ra1] 
let q2=ani[ra2] 
let q3=ani[ra3] 
let q4=ani[ra4] 

let obj={"ani":q1,"rob":q2,"tor":q3,"hea":q4
}

cl(obj)
