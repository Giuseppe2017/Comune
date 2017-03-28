/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
   $("#inserisciUtente").submit(function(event){
       event.preventDefault();
       var myObj = new Object();
       myObj.nome = $("#nome").val();
       myObj.cognome = $("#cognome").val();
       myObj.email = $("#email").val();
        myObj.commento = $("#commento").val();
       var json = JSON.stringify(myObj);
   
       $.ajax({
          url:"https://visitare-cfca8.firebaseio.com/utenti.json",
          type:"POST",
          data: json
       })
               .done(function(){
                   alert("Tutto ok");
       })
               .fail(function(){
                   alert("Errore!");
       }); 
   });

  $("#elenco").on("pageshow",function(){
      $.ajax("https://visitare-cfca8.firebaseio.com/utenti.json")
              .done(function(data){
                  var lista = $("#listaUtenti");
                  lista.empty();
                  $.map(data,function(riga,indice){
                      var Utente = "";
                          Utente += riga.nome + " ";
                          Utente += riga.cognome + " ";
                          Utente += riga.email + " ";
                          Utente += riga.commento + " ";
                          console.log(Utente);
                      $(lista).append('<li>'+ Utente +'</li>');
                  });
              })
              .fail(function(){
                  alert("Errore!");
              });
   });





});
