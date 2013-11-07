// VARIABLES
	var ARRIBA 		= false;
	var ABAJO 		= false;
	var IZQUIERDA 	= false;
	var DERECHA 	= false;
    
    var ESPACIO     = false;
	
	var nave = Array(Array(0,1,0),
                     Array(1,0,1));
    var navePosX    = 0;
    
    var disparos    = 0;
    var disparosA   = Array(0,0,0);
    
    var bunquer = Array(Array(0,0,1,1,1,1,0,0),
                        Array(0,1,1,1,1,1,1,0),
                        Array(1,1,1,1,1,1,1,1),
                        Array(1,1,1,1,1,1,1,1),
                        Array(1,1,1,0,0,1,1,1));
                        
    var enemigos = Array(Array(0,0,1,0,0),
                         Array(0,1,0,1,0),
                         Array(1,0,1,0,1));
    