/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU3.3";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mario-gil/DIU";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Susana",
                Photo: "susana.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere hacer un viaje a Andalucía con sus amigas",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere algo bueno pero barato",
                ima1: "cartoon-phone-sitting.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Deciden ir a Granada ya que es la ciudad con los mejores precios",
                touch2: "Móvil(llamada)",
                feel2: "3",
                con2: "LLama a sus amigas para ver quien ofrece su coche para ir hasta allí y ninguna quiere, así que tendrá que poner el suyo",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Se encuentra un hostel en una buena ubicación y con buen precio",
                touch3: "móvil",
                feel3: "1",
                con3: "Tiene que llamar por teléfono ya que la página no indica ninguna información sobre el parking",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Entran en la web e intentan reservar una habitación para las 5",
                touch4: "ordenador(web)",
                feel4: "2",
                con4: "La web indica que la habitación es para 6 personas, pero no pone si tendrán que compartirla con alguien más o no",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Intenta volver a la página principal para cambiar el día y ver otras habitaciones",
                touch5: "ordenador(web)",
                feel5: "2",
                con5: "El botón de Inicio le lleva a una página web distinta a la que había estado antes",
                ima5: "cartoon-PCcrying.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar una habitación séxtuple",
                touch6: "ordenador(web)",
                feel6: "3",
                con6: "Acaba cansada y sin ganas de viajar debido a lo confusa que resulta la página web",
                ima6: "cartoon-thinking.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Emilio",
                Photo: "emilio.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Su hermano tiene que ir a Granada por temas de trabajo, así que decide ir con él ya que nunca ha estado en Granada",
                touch1: "hermano",
                feel1: "5",
                con1: "Tiene que buscarse un sitio donde quedarse ya que no puede quedarse con su hermano",
                ima1: "cartoon-speaking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca hosteles baratos por la zona",
                touch2: "Móvil",
                feel2: "4",
                con2: "Quiere un hostel donde se hagan conciertos todas las noches",
                ima2: "cartoon-phone.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra un hostel donde hacen conciertos",
                touch3: "Móvil (web)",
                feel3: "1",
                con3: "Tiene que encontrar la información de los conciertos en una foto de la galería, ya que no viene ninguna información en la página",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Quiere llamar al hostel para pedirles una cama a cambio de tocar un concierto",
                touch4: "Móvil (web)",
                feel4: "2",
                con4: "La página es bastante confusa ya que no está bien diseñada, con imágenes que se superponen al texto en ocasiones",
                ima4: "cartoon-why.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Llama y le ofertan diferentes habitaciones en las que se podría quedar",
                touch5: "Móvil (llamada)",
                feel5: "3",
                con5: "Le hacen solo un descuento parcial a cambio del concierto, no le cubren toda la estancia",
                ima5: "cartoon-phoning.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Elige una habitación de 8 personas ya que le gusta conocer gente",
                touch6: "Ordenador (ciber-café)",
                feel6: "3",
                con6: "Solo le dejan estar un fin de semana",
                ima6: "cartoon-shaking.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



