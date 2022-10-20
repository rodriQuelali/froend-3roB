<?php
include 'conexion.php';
$pdo=new Conexion();
//mostrar registros
if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id'])){
        $sql=$pdo->prepare("SELECT * FROM libros WHERE id=:id");
        $sql->bindValue(':id',$_GET['id']);
        $sql->execute();
        $sql->setFetchMode(PDO::FETCH_ASSOC);
        header("HTTP/1.1 200 OK");
        echo json_encode($sql->fetchAll());
        exit;
    }
    else{
    $sql=$pdo->prepare("SELECT * FROM libros");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode($sql->fetchAll());
    exit;
    }
}
//insertar registros
if($_SERVER['REQUEST_METHOD']=='POST'){
    $sql="INSERT INTO libros(autor,titulo,precio,editorial,fecha_publicacion,unidades) VALUES 
    (:autor,:titulo,:precio,:editorial,:fecha_publicacion,:unidades)";
    $stmt=$pdo->prepare($sql);
    $stmt->bindValue(':autor',$_POST['autor']);
    $stmt->bindValue(':titulo',$_POST['titulo']);
    $stmt->bindValue(':precio',$_POST['precio']);
    $stmt->bindValue(':editorial',$_POST['editorial']);
    $stmt->bindValue(':fecha_publicacion',$_POST['fecha_publicacion']);
    $stmt->bindValue(':unidades',$_POST['unidades']);
    $stmt->execute();
    $idPost=$pdo->lastInsertId();
    if($idPost){
        header("HTTP/1.1 200 OK");
        echo json_encode($idPost);
        exit;
    }
}
//modificar registros
if($_SERVER['REQUEST_METHOD']=='PUT'){
    $sql="UPDATE libros SET  autor=:autor, titulo=:titulo, precio=:precio, editorial=:editorial, fecha_publicacion=:fecha_publicacion, unidades=:unidades WHERE id=:id";
    $stmt=$pdo->prepare($sql);
    $stmt->bindValue(':id',$_GET['id']);
    $stmt->bindValue(':autor',$_GET['autor']);
    $stmt->bindValue(':titulo',$_GET['titulo']);
    $stmt->bindValue(':precio',$_GET['precio']);
    $stmt->bindValue(':editorial',$_GET['editorial']);
    $stmt->bindValue(':fecha_publicacion',$_GET['fecha_publicacion']);
    $stmt->bindValue(':unidades',$_GET['unidades']);
    $stmt->execute();
    header("HTTP/1.1 200 OK");
    exit;
}
//eleiminar registros
if($_SERVER['REQUEST_METHOD']=='DELETE'){
$sql="DELETE FROM libros WHERE id=:id" ;
$stmt=$pdo->prepare($sql);
    $stmt->bindValue(':id',$_GET['id']);
    $stmt->execute();
    header("HTTP/1.1 200 OK");
    exit;
   



}
//si no controle a ninguna opcion anterio
header("HTTP/1.1;1 400  ERROR DE libros");

?>