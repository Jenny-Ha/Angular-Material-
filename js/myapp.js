var app = angular.module('myApp', []);

/*
    Funcion Controller
    # $scope referencia al objeto js "Modelo" como una propiedad
    # EL MODELO "alumno" almacena sus datos como una tabla Hash
    a traves de pares Clave - Valor.
*/

app.controller('AlumnosController', function($scope){
    $scope.alumnos = [    //Referencia al modelo "alumno"" como uns propiedad            
        {nombre: "Juan Blanco", telefono: "000-000-000", curso: "3ro Primaria"},
        {nombre: "Juana Blao", telefono: "000-000-001", curso: "2do Primaria"},
        {nombre: "Juan Black", telefono: "000-000-002", curso: "1ro Primaria"},
        {nombre: "Mamsm Black", telefono: "000-000-005", curso: "4ro Primaria"}
    ];
    
    $scope.Save = function() {
        $scope.alumnos.push({
            nombre:$scope.nuevoAlumno.nombre,
            telefono: $scope.nuevoAlumno.telefono,
            curso: $scope.nuevoAlumno.curso
        });
           $scope.nuevoAlumno.nombre = '';
    $scope.nuevoAlumno.telefono = '';
    $scope.nuevoAlumno.curso = '';

    }
});

    