<!-- Del Toro Cruz Joseph Vladimir -->
<!-- Jiménez García Juan Emanuel -->

<?php
$conexion = mysqli_connect("localhost", "root", "", "practica30") or die("Problemas con la conexión");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre_usuario = $_POST['nombre_usuario'];
    $contrasena = $_POST['contrasena'];

    // Utilizar consultas preparadas para evitar inyecciones SQL
    $stmt = $conexion->prepare("SELECT * FROM usuarios WHERE Usuario = ? AND Contraseña = ?");
    $stmt->bind_param("ss", $nombre_usuario, $contrasena);
    $stmt->execute();
    $resultado = $stmt->get_result();

    // Si se encontró un usuario, iniciar sesión
    if ($fila = $resultado->fetch_assoc()) {
        $tipo_usuario = $fila['Tipo'];

        if ($tipo_usuario == 'Administrador') {
            header('Location: admin/menu.html');
            exit();
        } elseif ($tipo_usuario == 'Usuario') {
            header('Location: Usuario/menu.html');
            exit();
        }
    } else {
        // Si no se encontró un usuario, mostrar un mensaje de error
        echo "<script>alert('Usuario y/o contraseña incorrectos.');</script>";
        echo "<script>window.location.href='login.html';</script>";
    }

    $stmt->close();
}

mysqli_close($conexion);
?>
