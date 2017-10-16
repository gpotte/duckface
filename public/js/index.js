$(document).ready(()=>{
  images = ['http://i0.kym-cdn.com/photos/images/facebook/000/082/485/to-be-anti-duckface-is-to-be-anti-zoolander-8513-1257879854-10.jpg',
            'http://i0.kym-cdn.com/entries/icons/mobile/000/002/681/duckface.jpg', 'http://www.failking.com/img1/2875-duck-face-win_f.jpg',
            'https://pics.me.me/http-nww-lacebooklgom-duck-face-ilollywoodsixg-the-onlytime-will-ever-be-cute-15169299.png',
            'https://i.pinimg.com/736x/92/76/b2/9276b207ab9d4eeed532dcdb5ecfbc70--duck-face-ducks.jpg', 'https://media.tenor.com/images/dbf2ed6047aaa9150d5567b6a81978d7/tenor.gif',
            'https://i.imgur.com/YQsQv9x.jpg'];
  $('#duck-image').attr("src", images[Math.floor(Math.random()*images.length)]);

    count();
    setInterval(()=>{count()}, 7000);
});

$("#moarduckface").click(()=>{
  $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: '/add',
      success: function(data) {
        if (data !== "Error")
        {
          $('#count').text(data);
          $('#duck-image').attr("src", images[Math.floor(Math.random()*images.length)]);
        }
      }
    });
});

function count(){
  $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: '/count',
      success: function(data) {
        if (data !== "Error")
        {
          $('#count').text(data);
        }
      }
    });
}
