/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU3.3";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mario-gil/DIU";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id:0,
				Name: "Susana",
				Photo: "susana.jpg",
				Quote: "Mantente fiel a los sueños de tu juventud",
				Age: 22,
				Occupation: "Estudiante de artes escénicas",
				Family: "Padres y hermano pequeño",
				Location: "Alicante (Elche)",
				Character: "Le gusta bailar de fiesta y conocer gente con sus amigas.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Socializar con gente de su edad.", "Conocer mundo"],
				Frustrations: ["No le gusta sentirse sola", "No es tan buena actriz como le gustaría"],
				Bio: "Es de Alicante. Se apuntó a teatro en el instituto, donde hizo sus actuales amigas, y le gustó tanto que decidió dedicarse a ello. Está acabando el grado de Artes Escénicas y sale de fiesta y viaja siempre que puede con sus amigas.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 5 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "Le han comentado sus amigas que el mes que viene harán un viaje a Andalucía, así que ella no se lo puede perder.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Emilio",
				Photo: "emilio.jpg",
				Quote: "Lo único que lamento en la vida es no haber bebido más vino",
				Age: 45,
				Occupation: "Artista callejero",
				Family: "Soltero, solo se habla con su hermano",
				Location: "Nómada, nació en Barcelona",
				Character: "Extrovertido, creativo y filosófico",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Compartir su obra con todo el mundo", "Conocer culturas", "Le gustan pasar las noches en los bares conociendo gente."],
				Frustrations: ["Le cuesta adaptarse a las nuevas tecnologías.", "Artista no reconocido.", "Ha tenido que aprender a usar las redes sociales para darse a conocer y compartir su música"],
				Bio: "Dejó de hablarse con su familia de joven, excepto con su hermano, al que sigue visitando una vez al año. Es un músico callejero. Se aloja en hosteles según donde decida ir, no tiene vivienda fija. Gana lo justo para vivir sus aventuras. De vez en cuando da algún concierto en bares",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "Toma su inspiración de sus experiencias en los hosteles que visita. El próximo destino de Emilio es Granada, ciudad que le encanta." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])