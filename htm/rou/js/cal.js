 function recalculate(){
 var ratioSumJs = 0;
 $('.ratio').each(function(){
ratioSumJs += $(this).val()-0;
 });
 $(".item").each(function(){
var probability = ($(this).find(".ratio").first().val()-0) / ratioSumJs;
probability*=100;
probability = probability.toFixed(3);
$(this).children(".probability").first().html(probability+"%");
 });
 }

// $('.add').click(function(){
// var add = '<tr class="item"><td><div class="color-indicator" style="background-color:#000000;"></div></td><td><input type="text" class="name" value="項目"></td><td><input type="number" class="ratio" value="1"></td><td class="probability"></td><td><button type="button" onclick="rmItem(this)">削除</button></td></tr>';
// $('#table').append(add);
// recalculate();
// if(mode==Mode.waiting){
// dataFetch();
// }
// });

 function rmItem(e){
 if($('.ratio').length>2){
$(e).parent().parent().remove();
recalculate();
 }
 if(mode==Mode.waiting){
dataFetch();
 }
 }

// $('#table').on('change', '.ratio', function(){
// recalculate();
// if(mode==Mode.waiting){
// dataFetch();
// }
// });

