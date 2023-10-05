<?php
include_once("/alumnos/php/classes/class.Database.php");

$nombre = $_POST['txtnombre'];
$estado = $_POST['cmbestado'];

$sql = "INSERT INTO alumnos (nombre) values('$nombre')";

$hecho = Database::ejecutar_idu( $sql);

if ($hecho) {

    $respuesta = json_encode(

        array(
            'err' => false,
            'mensaje' => "Creado correctamente"
        )
    );

} else {

    $respuesta = json_encode(

        array(
            'err' => true,
            'mensaje' => $hecho
        )
    );
}


echo $respuesta;

?>