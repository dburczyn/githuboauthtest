
$(function() {
var test = document.createElement('div');
$('#testcontainer').append(test);
var widgetAddButton = document.createElement('button');

$(widgetAddButton)
.appendTo($(test))
.text('TEST ');


$(widgetAddButton)
.unbind('click')
.on('click', function (e) {

// $.ajax({
//     crossOrigin: true,
//     url: "https://github.com/login/oauth/authorize",
//     type: 'GET',
//      dataType: 'text/html',
//   });

$.ajax({
    // url: "https://api.github.com/repos/bocbrokeragetest/brokerage/contents/repodata",
    url: "https://github.com/login/oauth/authorize",
    dataType: 'jsonp',
    // beforeSend: function (xhr)
    // {
    //    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    //    xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // }
    // dataType: 'json'
  });

});
});