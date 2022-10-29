<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Categoria</title>
    <link rel="stylesheet" href="index/html">
</head>
<body>
    <form  method="post" class="form_registro">
    <h2 class="form_titulo">CATEGORIA</h2> 
    <div class="contenedor_input">    
    
    <input type="text" placeholder="categoria" name="categoria" id="categoria" class="input_100" requerid>
    <input type="text" placeholder="autor" name="autor" id="autor" class="input_100" requerid>
    <input type="img" placeholder="imagen" name="imagen" id="imagen" class="input_50" requerid>
    <input type="date" placeholder="Fecha Publicacion" name="fecha" id="fecha" class="input_100" requerid>
        
    <input type="submit" value="Registrar" name="registrar" requerid>
    <input type="reset" value="Limpiar" name="limpiar" class="limpiar">   
    </div>
    </form>
        <?php
        //include('conecction.php');
       // $db=Db::getConnect();
        if(isset($_POST['registrar'])){
            if(strlen($_POST['categoria'])>=1 && strlen($_POST['autor'])>=1){
                $categoria=trim($_POST['categoria']);
                $autor=trim($_POST['autor']);
                $imagen=trim($_POST['imagen']);
                $fecha=($_POST['fecha']);
                $select=$db->prepare("INSERT INTO categorias(categoria,autor,imagen,fecha) VALUES ('$categoria','$autor','$imagen','$fecha')");
                $select->execute();
                if($select){
                    echo '<script language="javascript">alert("Se ha registrado correctamente...");</script>';
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