
  function roll(){
    var bodyParts = ['face', 'lips', 'butt', 'crotch', 'hand', 'foot', 'neck', 'back', 'belly button', 'knee', 'elbow', 'armpit']
    var actionItems = ['lick', 'kiss', 'bite', 'rub', 'blow on', 'think about', 'tickle']

    for (var i = 0; i < 1000; i+=100) {
      setTimeout(function(){
        $('.action-die').text(actionItems[Math.floor(Math.random()*actionItems.length)])
        $('.action-die').css({'transform': 'rotate('+ (Math.random()*90-45)+'deg)'})
        $('.action-die').animate({'left': Math.random()*75+'%', 'top': Math.random()*50+'%'}, 100)
      }, i * Math.random())
      setTimeout(function(){
        $('.body-die').text(bodyParts[Math.floor(Math.random()*bodyParts.length)])
        $('.body-die').css({'transform': 'rotate('+ (Math.random()*90-45)+'deg)'})
        $('.body-die').animate({'left': Math.random()*75+'%', 'top': Math.random()*50+'%'}, 100)
      }, i * Math.random())
    };
  }

$(function(){
  $('body').on('click', roll)
  roll()
})
