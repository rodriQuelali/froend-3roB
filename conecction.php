<?php
////CLASE para conectar a la base de datos
    class Db{
         private static $instance=NULL;
         private function __contruct(){}
         private function __clone(){}
         public static function getConnect(){
             if (!isset(self::$instance)){
                 $pdo_option[PDO::ATTR_ERRMODE]=PDO::ERRMODE_EXCEPTION;
                 self::$instance=new PDO('mysql:host=localhost; 
                 dbname=registro','root','',$pdo_option);
             }
            return self::$instance;
         }

    }
?>