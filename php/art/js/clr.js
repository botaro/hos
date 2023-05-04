$("#clr").click(function(){
$.get("/cart",function(dat,stat){
window.location.replace("http://localhost:3000")
})
})
