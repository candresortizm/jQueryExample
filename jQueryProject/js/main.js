$(document).ready(function(){
  //Usamos sttr, html, text
  console.log("JQuery DOM Ready Event");
  var dom_ul=$("ul");
  var dom_lis =$("ul li");
  console.log($(dom_ul));
  console.log($(dom_lis));
  //métodos de objetos JQuery---->
  dom_ul.attr("class","list-ordered"); //JQuery
  dom_ul.attr({
    "class":"list-ordered",
    "id":"little-list",
  });
  var first_button = $("ul li:first-child button");
  first_button.text("Mi primer botón");
  first_button.width("500px");
  first_button.css({
    "padding":0,
    "margin":15,
  });
  var new_li_button = first_button.parent().clone();
  dom_ul.append(new_li_button);
  console.log("Siblings",new_li_button.siblings().toArray());
  console.log("button",new_li_button.find("button").toArray());
  console.log("buttonParents",new_li_button.find("button").parents().toArray());
  console.log("next",new_li_button.next().toArray());
  console.log("preview",new_li_button.prev().toArray());
  console.log("PrevAll",new_li_button.prevAll().toArray());
  console.log("NextAll",new_li_button.nextAll().toArray());
  /*first_button.click(function(){
    //igual que lo de abajo
  });*/
  first_button.on("mouseover mouseleave",function(){
    first_button.parent().siblings().toggle(500);
  });
var google_link =$("a");
google_link.on("click",function(eventObject){
  eventObject.preventDefault();
  eventObject.stopPropagation();
  google_link.hide(1000);
  google_link.show(2000);
  google_link.slideUp(2000).delay(2000);
  google_link.slideDown(2000).delay(4000);
});
dom_ul.addClass("little-list");

  //$(dom_lis[0]).html("<button>Botón por defecto</button>");
  /*dom_lis.each(function(index,element){
    console.log(element);
  });*/
  //dom_ul.setAttribute("class", "list-ordered");//JS Vainilla
  //console.log(dom_lis.length);
  //console.log(dom_lis.toArray());
  //console.log("has li",dom_ul.has("li")); //trae el primero
  //console.log("has p",dom_ul.has("p")); //trae el primero
  //console.log($("ul").not(".list-ordered")); //trae el primero

});//JQuery

/*
document.addEventListener("DOMContentLoaded",function(){
    console.log("Javascript Native DOM Ready Event");
});//JS Native
*/

console.log("Before DOM Ready");
