<template>

<div class="form-register">
  <div class="imagen1">
    <img src="https://media.licdn.com/dms/image/C510BAQFTCYykNm1srA/company-logo_200_200/0/1519863012622?e=2147483647&v=beta&t=sLtA-NWpqUUmy9eSlgCfjbq3xeyyg2oXdBuvoQJXgCQ" id="icon" alt="logo">

  </div>
  <h4>Registrar</h4>
  <input class="controls" type="text" name = "nombres" id="nombres" placeholder="Ingresa tu nombre">
  <input class="controls" type="text" name = "apellidos" id="apellidos" placeholder="Ingresa tu apellido">
  <input class="controls" type="email" name = "correo" id="correo" placeholder="Ingresa tu correo">
  <input class="controls" type="password" name = "contraseña" id="contraseña" placeholder="Ingresa tu contraseña">

  <p>Estoy de acuerdo con <a href="#">Terminos y condiciones</a></p>
  <input class="botons" type="submit" value="Registrar">
  <p> <a href="./">¿Ya tengo cuenta?</a></p>

</div>

</template>

<script>

export default {
  name: 'Registro',
  components: {

  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form-register {
  width: 400px;
  background: #ffffff;
  padding: 30px;
  margin: auto;
  margin-top: 10px;
  border-radius: 4px;
  color: white;
  font-family: 'calibri';
  color: white;
  box-shadow: 7px 13px 37px;
}

.form-register .imagen1{
  scale: 75%;
  margin-top: 0;
}

.form-register h4{
  font-size: 26px;
  margin-bottom: 20px;
  color: #E45116;
  font-weight: bold;
}

.controls{
  width: 100%;
  background: #fcfcfc;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 16px;
  border:  1px solid #000000;
  font-size: 18px;
}

.form-register p{
  height: 40px;
  text-align: center;
  font-size: 18px;
  color: black;
  font-family: 'calibri';
  margin-bottom: 0;
  line-height: 40px;
  margin-bottom: 8px;
}

.form-register a {
  color: #E45116;
  text-decoration: underline;
}
.form-register a:hover{
  color: rgb(255, 203, 203);
  text-decoration: underline;
}
.form-register .botons {
  width: 100%;
  background: #1f53c5;
}
.form-register .botons{
  width: 100%;
  background: #fe7017;
  border: none;
  padding: 12px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 4px;
}



</style>
