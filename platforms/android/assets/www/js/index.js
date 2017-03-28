/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 /*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
$(function () {
    

    //funzione mostra pagine museo in modo dinamico

    $("#museo").on("pageshow", function () {
        $.ajax("https://visitare-cfca8.firebaseio.com/musei.json")
                .done(function (data) {
                    var lista = $("#listaMusei");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idMuseo = 'museo-' + indice;
                        var paginaMuseo = '<div data-role="page"   id="' + idMuseo + '"   style="text-align:center;">';

                        paginaMuseo += "<div data-role='header'  data-position='fixed' style='text-align:center;background-color:#2ad';>";
                        paginaMuseo += "<h1>Dettaglio</h1>";
                        paginaMuseo += "<a href='#' data-rel='back' data-theme='b' data-icon='carat-l' style='height:5px;margin-top:5px;'></a>";
                        paginaMuseo += '</div>';
                         paginaMuseo += '<h1>' + riga.nome + '</h1>';
                        
                        paginaMuseo += '<div data-role="main" class="ui-content">';
                        paginaMuseo += '<img src="' + riga.foto + '" alt="" style="width:100%;">';
                        paginaMuseo += '<div style="text-align:center;">' + riga.descr + '>';
//                        paginaMuseo += riga.nome + " ";
//                        paginaMuseo += riga.descr + " ";
//                        paginaMuseo += riga.foto + " ";
                        paginaMuseo += '</div>';
                        paginaMuseo += '<div data-role="footer" data-position="fixed" style="text-align: center;">';
                        paginaMuseo += '<div data-theme="b" data-role="controlgroup" data-type="horizontal">';
                        paginaMuseo += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-comment">Facebook</a>';
                        paginaMuseo += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-tag">Twitter</a>';
                        paginaMuseo += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-video">YouTube</a>';
                        paginaMuseo += '</div></div>';
                        paginaMuseo += '</div>';
                        $('body').append(paginaMuseo);

                        var puntoLista = '<a href="#' + idMuseo + '" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + riga.nome + '</a>';
                        lista.append("<li>" + puntoLista + "</li>");
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });
    //funzione  Fine pagine Chiesa in modo dinamico

    //funzione mostra pagine Chiesa in modo dinamico

    $("#chiesa").on("pageshow", function () {
        $.ajax("https://visitare-cfca8.firebaseio.com/chiese.json")
                .done(function (data) {
                    var lista = $("#listaChiese");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idChiesa = 'chiese-' + indice;
                        var paginaChiesa = '<div data-role="page"  id="' + idChiesa + '"   style="text-align:center;">';
                       
                        
                        paginaChiesa += '<div data-role="header" data-position="fixed" style="background-color:#2ad" >';
                         paginaChiesa += "<h1>Dettaglio</h1>";
                         paginaChiesa += "<a href='#' data-rel='back' data-theme='b' data-icon='back' style='height:5px;'></a>";
                      
                         
                        paginaChiesa += '</div>';
                        paginaChiesa += '<div data-role="main" class="ui-content"  >';
                        paginaChiesa += '<div>'
                         paginaChiesa += '<h1>' + riga.nome + '</h1>';
                          paginaChiesa += '</div>';
                        paginaChiesa += '<img src="' + riga.foto + '" alt="" style="width:300px;">';
                        paginaChiesa += '<div style="text-align:center;">' + riga.descr + ' </div>';
//                        paginaMuseo += riga.nome + " ";
//                        paginaMuseo += riga.descr + " ";
//                        paginaMuseo += riga.foto + " ";
                        paginaChiesa += '</div>';
                        paginaChiesa += '<div data-theme="b" data-role="footer" data-position="fixed" style="text-align: center;">';
                        paginaChiesa += '<div data-role="controlgroup" data-type="horizontal">';
                        paginaChiesa += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-comment">Facebook</a>';
                        paginaChiesa += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-tag">Twitter</a>';
                        paginaChiesa += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-video">YouTube</a>';
                        paginaChiesa += '</div></div>';
                        paginaChiesa += '</div>';
                        $('body').append(paginaChiesa);

                        var puntoLista = '<a href="#' + idChiesa + '" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + riga.nome + '</a>';
                        lista.append("<li>" + puntoLista + "</li>");
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    //funzione mostra pagine Chiesa in modo dinamico


    //funzione mostra pagine Cinema in modo dinamico

    $("#cinema").on("pageshow", function () {
        $.ajax("https://visitare-cfca8.firebaseio.com/cinema.json")
                .done(function (data) {
                    var lista = $("#listaCinema");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idCinema = 'cinema-' + indice;
                        var paginaCinema = '<div data-role="page" id="' + idCinema + '"   style="text-align:center;">';
                        paginaCinema += '<div data-role="header" data-position="fixed" style="background-color:#2ad" >';
                         paginaCinema += "<h1>Dettaglio</h1>";
                         paginaCinema += "<a href='#' data-rel='back' data-theme='b' data-icon='back' style='height:5px;'></a>";
                      
                         
                        paginaCinema += '</div>';
                        paginaCinema += '<div data-role="main" class="ui-content"  >';
                        paginaCinema += '<div>'
                         paginaCinema += '<h1>' + riga.nome + '</h1>';
                          paginaCinema += '</div>';
                        paginaCinema += '<img src="' + riga.foto + '" alt="" style="width:300px;">';
                        paginaCinema += '<div style="text-align:center;">' + riga.descr + ' </div>';
//                        paginaMuseo += riga.nome + " ";
//                        paginaMuseo += riga.descr + " ";
//                        paginaMuseo += riga.foto + " ";
                        paginaCinema += '</div>';
                        paginaCinema += '<div data-role="footer" data-position="fixed" style="text-align: center;">';
                        paginaCinema += '<div data-theme="b" data-role="controlgroup" data-type="horizontal">';
                        paginaCinema += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-comment">Facebook</a>';
                        paginaCinema += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-tag">Twitter</a>';
                        paginaCinema += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-video">YouTube</a>';
                        paginaCinema += '</div></div>';
                        paginaCinema += '</div>';
                        $('body').append(paginaCinema);

                        var puntoLista = '<a href="#' + idCinema + '" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + riga.nome + '</a>';
                        lista.append("<li>" + puntoLista + "</li>");
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    //funzione mostra pagine Cinema in modo dinamico


    //funzione mostra pagine Interesse in modo dinamico

    $("#interesse").on("pageshow", function () {
        $.ajax("https://visitare-cfca8.firebaseio.com/interesse.json")
                .done(function (data) {
                    var lista = $("#listaInteresse");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idInteresse = 'interesse-' + indice;
                        var paginaInteresse = '<div data-role="page"  id="' + idInteresse + '"    style="text-align:center;">';
                       paginaInteresse += '<div data-role="header" data-position="fixed" style="background-color:#2ad" >';
                         paginaInteresse += "<h1>Dettaglio</h1>";
                         paginaInteresse += "<a href='#' data-rel='back' data-theme='b' data-icon='back' style='height:5px;'></a>";
                      
                         
                        paginaInteresse += '</div>';
                        paginaInteresse += '<div data-role="main" class="ui-content"  >';
                        paginaInteresse += '<div>'
                         paginaInteresse += '<h1>' + riga.nome + '</h1>';
                          paginaInteresse += '</div>';
                        paginaInteresse += '<img src="' + riga.foto + '" alt="" style="width:300px;">';
                        paginaInteresse += '<div style="text-align:center;">' + riga.descr + ' </div>';
//                        paginaMuseo += riga.nome + " ";
//                        paginaMuseo += riga.descr + " ";
//                        paginaMuseo += riga.foto + " ";
                        paginaInteresse += '</div>';
                        paginaInteresse += '<div data-theme="b" data-role="footer" data-position="fixed" style="text-align: center;">';
                        paginaInteresse += '<div data-role="controlgroup" data-type="horizontal">';
                        paginaInteresse += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-comment">Facebook</a>';
                        paginaInteresse += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-tag">Twitter</a>';
                        paginaInteresse += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-video">YouTube</a>';
                        paginaInteresse += '</div></div>';
                        paginaInteresse += '</div>';
                        $('body').append(paginaInteresse);

                        var puntoLista = '<a href="#' + idInteresse + '" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + riga.nome + '</a>';
                        lista.append("<li>" + puntoLista + "</li>");
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    //funzione mostra pagine Interesse in modo dinamico


    //funzione mostra pagine Farmacie in modo dinamico

    $("#farmacie").on("pageshow", function () {
        $.ajax("https://visitare-cfca8.firebaseio.com/farmacie.json")
                .done(function (data) {
                    var lista = $("#listaFarmacie");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idFarmacia = 'farmacia-' + indice;
                        var paginaFarmacia = '<div data-role="page" id="' + idFarmacia + '"   style="text-align:center;">';
                           paginaFarmacia += '<div data-role="header"  data-position="fixed" style="background-color:#2ad" >';
                         paginaFarmacia += "<h1>Dettaglio</h1>";
                         paginaFarmacia += "<a href='#' data-rel='back' data-theme='b' data-icon='back' style='height:5px;'></a>";
                      
                         
                        paginaFarmacia += '</div>';
                        paginaFarmacia += '<div data-role="main" class="ui-content"  >';
                        paginaFarmacia += '<div>';
                         paginaFarmacia += '<h1>' + riga.nome + '</h1>';
                          paginaFarmacia += '</div>';
                        paginaFarmacia += '<img src="' + riga.foto + '" alt="" style="width:300px;">';
                        paginaFarmacia += '<div style="text-align:center;">' + riga.descr + ' </div>';
//                        paginaMuseo += riga.nome + " ";
//                        paginaMuseo += riga.descr + " ";
//                        paginaMuseo += riga.foto + " ";
                        paginaFarmacia += '</div>';
                        paginaFarmacia += '<div data-theme="b" data-role="footer" data-position="fixed" style="text-align: center;">';
                        paginaFarmacia += '<div data-role="controlgroup" data-type="horizontal">';
                        paginaFarmacia += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-comment">Facebook</a>';
                        paginaFarmacia += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-tag">Twitter</a>';
                        paginaFarmacia += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-video">YouTube</a>';
                        paginaFarmacia += '</div></div>';
                        paginaFarmacia += '</div>';
                        $('body').append(paginaFarmacia);

                        var puntoLista = '<a href="#' + idFarmacia + '" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + riga.nome + '</a>';
                        lista.append("<li>" + puntoLista + "</li>");
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });

   
    
    //funzione mostra pagine Farmacie in modo dinamico

    $("#ristoranti").on("pageshow", function () {
        $.ajax("https://visitare-cfca8.firebaseio.com/risto.json")
                .done(function (data) {
                    var lista = $("#listaRistoranti");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idRistorante = 'ristorante-' + indice;
                        var paginaRistorante = '<div data-role="page" id="' + idRistorante + '"  style="text-align:center;">';
                         paginaRistorante += '<div data-role="header" data-position="fixed" style="background-color:#2ad" >';
                         paginaRistorante += "<h1>Dettaglio</h1>";
                         paginaRistorante += "<a href='#' data-rel='back' data-theme='b' data-icon='back' style='height:5px;'></a>";
                      
                         
                        paginaRistorante += '</div>';
                        paginaRistorante += '<div data-role="main" class="ui-content"  >';
                        paginaRistorante += '<div>';
                         paginaRistorante += '<h1>' + riga.nome + '</h1>';
                          paginaRistorante += '</div>';
                        paginaRistorante += '<img src="' + riga.foto + '" alt="" style="width:300px;">';
                        paginaRistorante += '<div style="text-align:center;">' + riga.descr + ' </div>';
//                        paginaMuseo += riga.nome + " ";
//                        paginaMuseo += riga.descr + " ";
//                        paginaMuseo += riga.foto + " ";
                        paginaRistorante += '</div>';
                        paginaRistorante += '<div data-theme="b" data-role="footer" data-position="fixed" style="text-align: center;">';
                        paginaRistorante += '<div data-role="controlgroup" data-type="horizontal">';
                        paginaRistorante += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-comment">Facebook</a>';
                        paginaRistorante += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-tag">Twitter</a>';
                        paginaRistorante += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-video">YouTube</a>';
                        paginaRistorante += '</div></div>';
                        paginaRistorante += '</div>';
                        $('body').append(paginaRistorante);

                        var puntoLista = '<a href="#' + idRistorante + '" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + riga.nome + '</a>';
                        lista.append("<li>" + puntoLista + "</li>");
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    //funzione mostra pagine Farmacie in modo dinamico
    

 //funzione mostra pagine Farmacie in modo dinamico
    
    //funzione Galleria
    $(document).ready(function () {
            $('#slider img').on({
                mouseover: function () {
                    $(this).css({
                        'cursor': 'hand',
                        
                    });
                },
                mouseout: function () {
                    $(this).css({
                        'cursor': 'default',
                        
                    });
                },
                click: function () {
                    var imageURL = $(this).attr('src');
                    $('#mainImage').fadeOut(500, function () {
                        $(this).attr('src', imageURL);
                    }).fadeIn(500);
                }
            });
      //funzione Galleria
    
    
    });


});