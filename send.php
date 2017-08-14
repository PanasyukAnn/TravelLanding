<!DOCTYPE html>
  <html>
    <head>
     <title>Success</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>
    <body>

   <?
// ----------------------------конфигурация-------------------------- //

$adminemail="mail@ктосомной.adr.com.ua";  // e-mail админа


$date=date("d.m.y"); // число.месяц.год

$time=date("H:i"); // часы:минуты:секунды

$backurl="http://eko.kl.com.ua/";  // На какую страничку переходит после отправки письма

//---------------------------------------------------------------------- //



// Принимаем данные с формы

$name=$_POST['name'];

$email=$_POST['email'];

$sms=$_POST['sms'];


//Формируем сообщение
$msg="


<h5>Name: $name</h5>


<h5>E-mail: $email</h5>


<h5>Message: $sms</h5>


";



 // Отправляем письмо

mail("$adminemail", "$date $time Сообщение
от $name", "$msg");



// Сохраняем в базу данных

$f = fopen("message.txt", "a+");

fwrite($f," \n $date $time Сообщение от $name");

fwrite($f,"\n $msg ");

fwrite($f,"\n ---------------");

fclose($f);



// Выводим сообщение пользователю

print "<script language='Javascript'><!--
function reload() {location = \"$backurl\"}; setTimeout('reload()', 5000);
//--></script>

$msg

<h5>The message was successfully sent! Please wait, now you will be redirected to the main page...</h5>";
exit;

 ?>
</body>
</html>