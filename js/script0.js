hp1 = 1000;
scoreU=0;
scoreO=0;
/*Variable globale donnant une valeur à la barre de vie*/

function validation(){
	var message=document.getElementById("message");/*Variable  correspondant à la zone de texte annonçant le résultat de la partie*/

	var scoreUser=document.getElementById("ScoreUser");/*Variable  correspondant à la zone de texte annonçant le score utilisateur */

	var scoreOrdi=document.getElementById("ScoreOrdi");/*Variable  correspondant à la zone de texte annonçant le score ordinateur */

	var choixJoueur=document.getElementById("choixJoueur");/*Variable correspondant au choix du joueur*/

	var choixOrdinateur=document.getElementById("choixOrdinateur");/*Variable correspondant au choix de l'ordinateur*/

	var roche=document.getElementById("roche");/*Variable correspondant à l'id "roche"*/

	var papier=document.getElementById("papier");/*Variable correspondant à l'id "papier"*/

	var ciseau=document.getElementById("ciseau");/*Variable correspondant à l'id "ciseau"*/

	var div1=document.getElementById("div1");/*Variable correspondant à la barre de vie*/

	var chiffre= Math.floor(Math.random()*100+1);/*Variable correspondant au chiffre généré au hasard par l'ordinateur*/

	var perd = new Audio("perd.mp3");/*Variable correspondant au bruit lorsque le joueur perd*/

	var gagne = new Audio("gagne.mp3");/*Variable correspondant au bruit lorsque le joueur gagne*/

	var egal = new Audio("egal.mp3");/*Variable correspondant au bruit lorsque c'est égal*/

	message.value="";
	choixJoueur.value="";
	choixOrdinateur.value	="";
	scoreUser.value="";
	scoreOrdi.value="";


	if (chiffre <= 34) {
			chiffre = "roche";
		} else if(chiffre <= 67) {
			chiffre = "papier";
		} else {
			chiffre = "ciseau";
		}
/*Conditions pour associer un nombre à «roche» «papier» ou «ciseau»*/


if(roche.checked || papier.checked || ciseau.checked){

	if (chiffre == 'roche') {
		if (roche.checked) {
			message.value="Égalité";
			scoreU=scoreU+1;
			scoreO=scoreO+1;
			scoreUser.value=scoreU;
			scoreOrdi.value=scoreO;
			egal.play();
			 message.style.color='green';
			 choixJoueur.value="Vous avez choisi Roche";
			 choixOrdinateur.value="Ordinateur a choisi Roche";
			 /*Série d'actions si les deux opposants choisissent «roche»*/

		} else if (papier.checked) {
			message.value="Tu as gagné";
			scoreU=scoreU+2;
			scoreUser.value=scoreU;
			scoreOrdi.value=scoreO;
			gagne.play();
			 message.style.color='blue';
			  choixJoueur.value="Vous avez choisi Papier";
			 choixOrdinateur.value="Ordinateur a choisi Roche";
			 scoreUser=scoreUser+1;
		  /*Série d'actions si le joueur choisi «papier» et l'ordinateur «roche»*/

		} else if (ciseau.checked) {
			message.value="Tu as perdu";
			scoreO=scoreO+2;
			scoreUser.value=scoreU;
			scoreOrdi.value=scoreO;
		  perd.play();
			message.style.color='red';
			choixJoueur.value="Vous avez choisi Ciseaux";
	    choixOrdinateur.value="Ordinateur a choisi Roche";
			/*Série d'actions si le joueur choisi «ciseau» et l'ordinateur «roche»*/

				  hp1 = hp1 - 100;
				   div1.style.width = hp1 + "px";

				   if (hp1 <= 0){
					 	//alert(scoreU);
 						//alert(scoreO);
						alert("Game Over !");
						choixJoueur.value="Votre score final : " + scoreU;
						choixOrdinateur.value="Score final Ordinateur : "+ scoreO;
						if (scoreU >= scoreO) {message.value="Vainqueur : Utilisateur";} else {message.value="Vainqueur : Ordinateur"; }

						alert("Rejouez ?");
						hp1 = 1000;
						div1.style.width = hp1 + "px";

						scoreU=0;
						scoreO=0;
						scoreUser.value="";
						scoreOrdi.value="";
						choixJoueur.value="";
						choixOrdinateur.value="";
						Alert("Score User = "+scoreU);
						Alert("Score Ordi = "+scoreO);


					  }
					  /*Série d'actions concernant la barre de vie*/




		}
	}


	if (chiffre == 'papier') {
		if (papier.checked) {
			message.value="Égalité";
			scoreU=scoreU+1;
			scoreO=scoreO+1;
			scoreUser.value=scoreU;
			scoreOrdi.value=scoreO;
			egal.play();
			 message.style.color='green';
			 choixJoueur.value="Vous avez choisi Papier";
			 choixOrdinateur.value="Ordinateur a choisi Papier";
			 /*Série d'actions si les deux opposants choisissent «papier»*/

		} else if (ciseau.checked) {
			message.value="Tu as gagné";
			scoreU=scoreU+2;
			scoreUser.value=scoreU;
			scoreOrdi.value=scoreO;
			gagne.play();
			 message.style.color='blue';
			 choixJoueur.value="Vous avez choisi Ciseaux";
			 choixOrdinateur.value="Ordinateur a choisi Papier";
			 /*Série d'actions si le joueur choisi «ciseau» et l'ordinateur «papier»*/

		} else if (roche.checked) {
			message.value="Tu as perdu";
			scoreO=scoreO+2;
			scoreUser.value=scoreU;
			scoreOrdi.value=scoreO;
			perd.play();
		    message.style.color='red';
			choixJoueur.value="Vous avez choisi Roche";
			 choixOrdinateur.value="Ordinateur a choisi Papier";
			 /*Série d'actions si le joueur choisi «roche» et l'ordinateur «papier»*/

		       hp1 = hp1 - 100;
				   div1.style.width = hp1 + "px";

					 if (hp1 <= 0){
						 //alert(scoreU);
						 //alert(scoreO);
							alert("Game Over !");
							choixJoueur.value="Votre score final : " + scoreU;
							choixOrdinateur.value="Score final Ordinateur : "+ scoreO;
							if (scoreU >= scoreO) {message.value="Vainqueur : Utilisateur";} else {message.value="Vainqueur : Ordinateur"; }

							alert("Rejouez ?");
							hp1 = 1000;
							div1.style.width = hp1 + "px";

							scoreU=0;
							scoreO=0;
							scoreUser.value="";
							scoreOrdi.value="";
							choixJoueur.value="";
							choixOrdinateur.value="";
							Alert("Score User = "+scoreU);
							Alert("Score Ordi = "+scoreO);

					  }
					  /*Série d'actions concernant la barre de vie*/


		}
	}

	if (chiffre == 'ciseau') {
		if (ciseau.checked) {
			message.value="Égalité";
			scoreU=scoreU+1;
			scoreO=scoreO+1;
			scoreUser.value=scoreU;
			scoreOrdi.value=scoreO;
			//egal.play();
			 message.style.color='green';
			 choixJoueur.value="Vous avez choisi Ciseaux";
			 choixOrdinateur.value="Ordinateur a choisi Ciseaux";
			 /*Série d'actions si les deux opposants choisissent «ciseau»*/

		} else if (roche.checked) {
			message.value="Tu as gagné";
			scoreU=scoreU+2;
			scoreUser.value=scoreU;
			scoreOrdi.value=scoreO;
			//gagne.play();
			 message.style.color='blue';
			 choixJoueur.value="Vous avez choisi Roche";
			 choixOrdinateur.value="Ordinateur a choisi Ciseaux";
		 /*Série d'actions si le joueur choisi «roche» et l'ordinateur «ciseau»*/
		} else if (papier.checked) {
			message.value="Tu as perdu";
			scoreO=scoreO+2;
			scoreUser.value=scoreU;
			scoreOrdi.value=scoreO;
			//perd.play();
			message.style.color='red';
			choixJoueur.value="Vous avez choisi Papier";
			 choixOrdinateur.value="Ordinateur a choisi Ciseaux";
			 /*Série d'actions si le joueur choisi «papier» et l'ordinateur «ciseau»*/

			 	hp1 = hp1 - 100;
				div1.style.width = hp1 + "px";
				   if (hp1 <= 0){
						 //alert(scoreU);
						 //alert(scoreO);
						 alert("Game Over !");
						 choixJoueur.value="Votre score final : " + scoreU;
						 choixOrdinateur.value="Score final Ordinateur : "+ scoreO;
						 if (scoreU >= scoreO) {message.value="Vainqueur : Utilisateur";} else {message.value="Vainqueur : Ordinateur"; }

						alert("Rejouez ?");
						 hp1 = 1000;
						 div1.style.width = hp1 + "px";

						 scoreU=0;
 						scoreO=0;
 						scoreUser.value="";
 						scoreOrdi.value="";
 						choixJoueur.value="";
 						choixOrdinateur.value="";
 						Alert("Score User = "+scoreU);
 						Alert("Score Ordi = "+scoreO);

					  }
					  /*Série d'actions concernant la barre de vie*/


		}
	}
}}
