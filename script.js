    document.getElementById("registroForm").addEventListener("submit", function (e) {
      e.preventDefault(); // Evitar que se envíe el formulario

      // Obtener los valores de los campos
      var nombre = document.getElementById("nome").value;
      var apellido = document.getElementById("sobrenome").value;
      var email = document.getElementById("email").value;
      var cpf = document.getElementById("cpf").value;
      var numCarton = document.getElementById("numCarton").value;
      var Endereco = document.getElementById("Endereco").value;

      // Validar que los campos no estén vacíos
      if (nombre === "" || apellido === "" || email === "" || cpf === "" || numCarton === "") {
        alert("Por favor, complete todos los campos.");
        return;
      }

      // Puedes enviar los datos a un servidor aquí o realizar otras acciones
      alert("Formulario enviado con éxito. ¡Gracias por registrarte!");
    });
 