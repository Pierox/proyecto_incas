// JavaScript Document

$(document).ready(function(e) {

	var pase = $("#sonido1")[0];
	var incas = $("#sonido2")[0];
	var tirit = $("#sonido3")[0];
	
pase.play();
$("#intro").fadeIn(1000).delay(500).fadeOut(1000,function(){
	machupicchu();
	});

function machupicchu()
{
	$("#escena1").fadeIn(500,function(){
			$("#texto_incas").delay(300).fadeIn(500,function(){
				$("#texto_incas").animate({
					fontSize:'30px',
				},400,function(){
						$("#boca").fadeIn(500).fadeOut(200).fadeIn(200,function(){tirit.play();}).fadeOut(200).fadeIn(200,function(){
							$("#boca").delay(500).fadeOut(500);
							$("#texto_incas").delay(500).fadeOut(500,function(){
								$("#escena1").fadeOut(500,function(){
								escena2();
								});
								});
							
						});
					});
				});
			})
	
}

$("#repetir").approach({
	    "fontSize": "30px",
	    "color": "#fff"
	  }, 300);


$("#repetir").click(function(){
	escena2();
	resetear();
	incas.currentTime = 0;
});

function resetear(){
	

	$("#escena2").fadeIn(500);
	$("#escena3").fadeOut(500);
	$("#cuadrito1").fadeOut(500);

	$("#mapa").fadeIn(1);
	$("#mapa2").css('display','none');
	$("#mapa3").css('display','none');
	$("#mapa4").css('display','none');

	$("#mapa").css('top','0px');
	$("#mapa").css('left','0px');
	$("#espanol").css('left','-229px');
	$("#mapa").css('width','100%');

	$("#mapa2").css('top','0px');
	$("#mapa2").css('left','0px');
	$("#mapa2").css('width','100%');

	$("#mapa3").css('top','0px');
	$("#mapa3").css('left','0px');
	$("#mapa3").css('width','100%');

	$("#mapa4").css('top','0px');
	$("#mapa4").css('left','0px');
	$("#mapa4").css('width','100%');

	$("#rojo1").css('display','none');
	$("#rojo2").css('display','none');
	$("#cuadrito1").css('background-position','0px 0px');
	$("#tumi").css('background-position','0px 0px');
	$("#tumi").css('background-position','0px 0px');
	$("#tumi").fadeIn(1);
	$("#inca1").fadeIn(1);
	$("#inca1").css('background-position','0px 0px');
	$("#inca1").css('left','-341px');
	$("#rojo2").css('background-position','0px 0px');
	$("#medida").css('background-position','0px 0px');

	$("#lineas").css('background-position','0px 0px');
	$("#quipu").css('background-position','0px 0px');
	$("#quipu").fadeIn(1);


	$("#guardia1").css('top','362px');
	$("#guardia5").css('top','88px');

	$("#piedra1").css('top','577px');
	$("#piedra2").css('top','580px');
	$("#piedra3").css('top','695px');
	
	$("#piedra1").fadeIn(1);
	$("#piedra2").fadeIn(1);
	$("#piedra3").fadeIn(1);
	}


function escena3(){
	$("#escena2").delay(5000).fadeOut(1000);
	$("#escena3").delay(5000).fadeIn(1000);
	}

function escena2(){
	incas.play();
	$("#santillana_logo").fadeIn(500);
	$("#escena2").fadeIn(500,function(){
		$("#mapa").delay(1700).animate({
			top:'-148px',
			left:'-140px',
			width:'124%',
			},1000,function(){
				$("#rojo1").fadeIn(500,function(){
					$("#cuadrito1").delay(500).fadeIn(500,function(){
						$("#cuadrito1").sprite({fps: 9, no_of_frames: 5});
							});
						$("#tumi").sprite({fps: 9, no_of_frames: 11, play_frames: 11});
						
						$("#cuadrito1").delay(4000).fadeOut(500,function(){
								$("#cuadrito1").destroy();
								});
						$("#tumi").delay(4000).fadeOut(500,function(){
							$("#inca1").sprite({fps: 6, no_of_frames: 5});
							$("#inca1").delay(1000).animate({
								left:'1324px'
								},12000,function(){
									$("#inca1").destroy();
									$("#mapa2").fadeIn(1);
									$("#mapa2").animate({
										top:'-107px',
										left:'-104px',
										width:'117%'
										},1000,function(){
											$("#rojo2").fadeIn(500,function(){
												$("#rojo2").sprite({fps: 9, no_of_frames: 9, play_frames: 9});
												$("#medida").delay(1500).fadeIn(500,function(){
													$("#medida").delay(13700).fadeOut(500);
													$("#piedra1").delay(14000).animate({
														top:'448px',
														},500,function(){
															$("#piedra2").animate({
																top:'233px',
																},500,function(){
																	$("#piedra3").animate({
																		top:'230px',
																		},500,function(){
																			$("#guardia1").fadeIn(1);
																			$("#guardia1").animate({
																				top:'92px',
																				},500,function(){
																					$("#guardia1").delay(1300).fadeOut(1);
																					$("#guardia2").delay(1300).fadeIn(1,function(){
																						$("#guardia2").delay(1300).fadeOut(1);
																						$("#guardia3").delay(1300).fadeIn(1,function(){
																							$("#guardia3").delay(1300).fadeOut(1);
																							$("#guardia4").delay(1300).fadeIn(1,function(){
																								$("#guardia4").delay(1300).fadeOut(1);
																								$("#guardia5").delay(1300).fadeIn(1,function(){
																									$("#guardia5").delay(1300).fadeOut(1);
																									$("#guardia4").delay(1300).fadeIn(1,function(){
																										$("#guardia4").delay(1300).fadeOut(1);
																										$("#guardia5").delay(1300).fadeIn(1,function(){
																											$("#guardia5").delay(1300).animate({
																												top:'362px'
																												},500,function(){
																													$("#guardia5").fadeOut(1);
																													$("#piedra1").fadeOut(800);
																													$("#piedra2").fadeOut(800);
																													$("#piedra3").fadeOut(800,function(){
																														$("#mapa3").fadeIn(1);
																														$("#mapa3").animate({
																															top:'-58px',
																															left:'-167px',
																															width:'140%',
																															},1000,function(){
																							$("#mapa4").delay(900).fadeIn(1,function(){
																							$("#lineas").fadeIn(500,function(){
																							$("#lineas").sprite({fps: 8, no_of_frames: 11, play_frames: 11});
																							$("#lineas").delay(12000).fadeOut(500,function(){
																								$("#quipu").sprite({fps: 10, no_of_frames: 7, play_frames: 7});
																								$("#quipu").delay(19000).fadeOut(500,function(){
																									$("#espanol").delay(300).animate({
																										left:'550px',
																										},500,function(){
																											
																											escena3();
																											});
																									});
																								});
												
																																}); 
																																	});
																																})
																														});
																													});            
																										});
																									});
																								});
																							});
																						});
	
																						});
																					});
																			});
																	});
															});
													});
												});
											});
									});
							});
						});
					});
					
			});
	}
	
	
	
}); //fin de ready//


















