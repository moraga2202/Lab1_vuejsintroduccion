# practica2_VueJSIntro

//Ocultar o mostrar div que contiene la lista
const  ocultar  =  documento . querySelector ( '#hideElements' ) ;
const  listDiv  =  documento . querySelector ( '#lista' ) ;

//Constantes para agregar elementos a la lista
const  addItemInput  =  documento . querySelector ( '#addItem' ) ; //Aporte
const  addItemButton  =  documento . querySelector ( 'button#addItemButton' ) ;  //Botón

//Eliminar el último ítem
const  removeItemButton = documento . querySelector ( 'button#removeItemButton' ) ;

//Eliminar elemento seleccionado
const  removeItem = documento . querySelector ( 'botón#removeItem' ) ;

//Mostrar y ocultar lista
ocultar _ addEventListener ( 'clic' , ( )  =>  {
    if  ( listDiv . estilo . mostrar  ==  'ninguno' ) {
        listDiv . estilo _ mostrar  =  'bloquear' ;
        ocultar _ contenido de texto  =  '<<' ;
    }  más  {
        listDiv . estilo _ mostrar  =  'ninguno' ;
        ocultar _ contenido de texto  =  '>>' ;
    }
    } ) ;

    //Agregar elementos a la lista
    botón añadir elemento . addEventListener ( 'clic' ,  ( )  =>  {
        let  lista  =  documento . querySelector ( 'ul' ) ;
        sea  ​​li  =  documento . crearElemento ( 'li' ) ;
        li . textContent  =  addItemInput . valor ;
        lista _ agregarNiño ( li ) ;
        agregar elemento de entrada . valor = "" ;
    } ) ;

    //Eliminar el último elemento de la lista
    removeItemButton . addEventListener ( 'clic' , ( )   =>  {
        let  lista  =  documento . querySelector ( 'ul' ) ;
        sea  ​​li  =  documento . querySelector ( 'li:último-hijo' ) ;
        lista _ removeChild ( li ) ;
    } ) ;
    
    //Obtener índice del elemento seleccionado
    función  buscarÍndice ( elem )  {
        var  i ,  len  =  artículos . longitud ;
        para  ( i = 0 ;  i < len ;  i ++ )  {
            if  ( elementos  [ i ] === elem )  {
                devolver  yo ;
            }
        }
        retorno  - 1 ;
    }

    //Obtener índice de elemento en lista
    var  lista  =  documento . getElementById ( "elementos de la lista" ) ,
        elementos  =  lista . getElementsByTagName ( "li" ) ;
    lista _ hacer clic  =  función ( e )  {
        var  evento  =  e  ||  ventana _ evento ,
        src  =  evento . objetivo  ||  evento _ ElementoOrigen ;
        var  myIndex  =  findIndex ( src ) ;

        //Alerta(miÍndice);
        índice = miÍndice ;
        consola _ registro ( miÍndice ) ;

        //Cambiar color del elemento seleccionado
        if  ( evento . objetivo . tagName  ===  'LI'  )  {
            lista _ querySelectorAll ( 'li' ) . forEach ( el => el . classList . remove ( 'alerta' ,  'alerta-éxito' ) ) ;  // Se agregan clases Bootstrap para los elementos
            artículos [ índice ] . listaclases . add ( 'alerta' , 'alerta-éxito' ) ;
        }
    } ;

    //Eliminar elemento seleccionado
    removeItem . addEventListener ( 'clic' ,  ( )  =>  {
        dejar  showDiv  =  documento . getElementById ( 'lista' ) ;
        let  divAlert  =  documento . crearElemento ( 'div' ) ;
        let  etiqueta  =  documento . createElement ( 'etiqueta' ) ;
        etiqueta _ innerHTML =  'Se eliminó el elemento '  + index ;
        alerta div . listaclases . add ( 'alerta' ,  'alerta-peligro' ) ;  //Clase de alerta

        artículos [ índice ] . padreNodo . removeChild ( elementos [ índice ] ) ;
        alerta div . appendChild ( etiqueta ) ;
        mostrarDiv . appendChild ( divAlert ) ;
        setTimeout ( función ( ) { divAlert . eliminar ( ) ; } , 3000 )

    } ) ;
