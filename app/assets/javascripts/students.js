$(function(){
  //student画像のappend用
  // function buildHTML(image) {
  //   let html = `<div class='f-block'>
  //                 <div class="f-image"><img src: "${image}"></div> 
  //               </div>`
  //   return html
  // }

  // $('.f-container').on("click", ".f-block", function(){
  //   $(this).buildHTML();
  // }).on("mouseout", ".f-block", function(){
  //   $(this).css();
  // })

  $(function(){
    $(".f-block").draggable({
      containment: '.students__listbox',
      scroll: false,
    })
       
    $("#drop_area").droppable({
      drop: function(ev, ui) {
        // ドロップされたDraggable要素を追加
        ui.draggable.appendTo(this);
      }


    });

  });

}); 