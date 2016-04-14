function AlumnosController($scope){
    $scope.alumnos = [            
        {nombre: "Juan Blanco", telefono: "000-000-000", curso: "3ro Primaria"},
        {nombre: "Juana Blao", telefono: "000-000-001", curso: "2do Primaria"},
        {nombre: "Juan Black", telefono: "000-000-002", curso: "1ro Primaria"}
        
    ];
}
/*
            Funcion Controller
            # $scope referencia al objeto js "Modelo" como una propiedad
            # EL MODELO "alumno" almacena sus datos como una tabla Hash
            a traves de pares Clave - Valor.
        */
    //Referencia al modelo "alumno"" como uns propiedad
    