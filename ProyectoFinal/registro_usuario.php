<!-- Del Toro Cruz Joseph Vladimir -->
<!-- Jiménez García Juan Emanuel -->

<?php
$conexion = mysqli_connect("127.0.0.1:3310", "root", "", "practica30") or die("Problemas con la conexión");

// Verificar si el nombre de usuario ya está registrado
$resultado= mysqli_query($conexion, "SELECT * FROM usuarios WHERE Usuario = '$_REQUEST[usuario]'");

if (mysqli_num_rows($resultado) > 0) {
    // El nombre de usuario ya está registrado, mostrar mensaje de error
    echo "<script>alert('El nombre de usuario $_REQUEST[usuario] ya está registrado.')</script>";
    echo "<script>window.location.href='registro_usuarios.php';</script>";
} else {
    // El nombre de usuario no está registrado, proceder con la inserción
    mysqli_query($conexion, "INSERT INTO usuarios (Nombre, Apellido, Celular, Correo, Usuario, Contraseña, Tipo) VALUES ('$_POST[nombre]','$_POST[apellido]','$_POST[telefono]', '$_POST[correo]', '$_POST[usuario]', '$_POST[contraseña]', '$_POST[tipo_usuario]')")
    or die("Problemas en el select" . mysqli_error($conexion));

    mysqli_close($conexion);
    echo "<script>alert('Usuario de tipo $_REQUEST[tipo_usuario] registrado.')</script>";
    echo "<script>window.location.href='login.html';</script>";
}
?>