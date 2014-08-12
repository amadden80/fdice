
function roll(){
  var bodyParts = ['face', 'lips', 'butt', 'crotch', 'hand', 'foot', 'neck', 'back', 'belly button', 'knee', 'elbow', 'armpit']
  var actionItems = ['lick', 'kiss', 'bite', 'rub', 'blow on', 'think about', 'tickle']

  $([$('.action-die'), $('.body-die')]).each(function(idx, ele){
    for (var i = 0; i < 1000; i+=100) {
      setTimeout(function(){
        ele.text(actionItems[Math.floor(Math.random()*actionItems.length)])
        ele.css({'transform': 'rotate('+ (Math.random()*90-45)+'deg)'})
        ele.animate({'left': Math.random()*75+'%', 'top': Math.random()*50+'%'}, 100)
      }, i * Math.random())
    };
  })
}


$(function(){
  $('body').on('click', roll)
  roll()
})
