<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/registro.css">
    <title>Registro</title>
</head>
<body>
    <form  method="post" class="form_registro">
    <h2 class="form_titulo">REGISTRO</h2> 
    <div class="contenedor_input">    
    
    <input type="text" placeholder="nombre" name="nombre" id="nombre" class="input_100" requerid>
    <input type="text" placeholder="Ap. Paterno" name="paterno" id="apellido" class="input_50" requerid>
    <input type="text" placeholder="Ap. Materno" name="materno" id="apellido" class="input_50" requerid>   
    <input type="text" placeholder="Cedula" name="ci" id="usuario" class="input_50" requerid>
    <input type="text" placeholder="Contraseña" name="password" class="input_50" requerid>
    <h5 class="fecha">Fecha de Nacimiento</h5> 
    <input type="date" placeholder="Fecha Nacimiento" name="naci" id="fechaN" class="input_100" requerid>
        
    <input type="submit" value="Registrar" name="registrar" requerid>
    <input type="reset" value="Limpiar" name="limpiar" class="limpiar">   
    
    </div>
    </form>
        <?php
        include('conecction.php');
        $db=Db::getConnect();
        if(isset($_POST['registrar'])){
            if(strlen($_POST['nombre'])>=1 && strlen($_POST['paterno'])>=1){
                $nombre=trim($_POST['nombre']);
                $paterno=trim($_POST['paterno']);
                $materno=trim($_POST['materno']);
                $ci=trim($_POST['ci']);
                $fechareg=($_POST['naci']);
                $contra=trim($_POST['password']);
                $passFuerte=password_hash($contra,PASSWORD_DEFAULT);
                /*ingresar los datos a la base de datos*/
                $select=$db->prepare("INSERT INTO usuario(nombre,paterno,materno,ci,fechaNaci,contra) VALUES ('$nombre','$paterno','$materno','$ci','$fechareg','$passFuerte')");
                $select->execute();
                if($select){
                    echo '<script language="javascript">alert("Se ha registrado correcamente...");</script>';
                }else{
                    echo '<script language="javascript">alert("ha ocurrido un error..");</script>';
                }
            }else{
                echo '<script language="javascript">alert("complete los campos por favor");</script>';
            }
        }
        ?>
 
</body>
</html>