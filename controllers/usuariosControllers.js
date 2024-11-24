let usuarios = [
    {
      id: 1,
      nombre: "Juan",
      apellido: "Pérez",
      email: "juan.perez@example.com",
      telefono: "+5491122334455",
      foto: "../img/users/juan_perez.png",
      ciudad: "Buenos Aires",
      edad: 30,
      pais: "Argentina"
    },
    {
      id: 2,
      nombre: "María",
      apellido: "García",
      email: "maria.garcia@example.com",
      telefono: "+5511987654321",
      foto: "../img/users/maria_garcia.png",
      ciudad: "San Luis",
      edad: 25,
      pais: "Argentina"
    },
    {
      id: 3,
      nombre: "Ana",
      apellido: "Rodríguez",
      email: "ana.rodriguez@example.com",
      telefono: "+346543219876",
      foto: "../img/users/ana_rodriguez.png",
      ciudad: "barcelona",
      edad: 32,
      pais: "España"
    },
    {
      id: 4,
      nombre: "Carlos",
      apellido: "López",
      email: "carlos.lopez@example.com",
      telefono: "+12125551212",
      foto: "../img/users/carlos_lopez.png",
      ciudad: "California",
      edad: 28,
      pais: "Estados Unidos"
    },
    {
      id: 5,
      nombre: "Sofía",
      apellido: "Martínez",
      email: "sofia.martinez@example.com",
      telefono: "+33123456789",
      foto: "../img/users/sofia_martinez.png",
      ciudad: "Madrid",
      edad: 27,
      pais: "España"
    },
    {
      id: 6,
      nombre: "Pedro",
      apellido: "Hernández",
      email: "pedro.hernandez@example.com",
      telefono: "+447777888999",
      foto: "../img/users/pedro_hernandez.png",
      ciudad: "Tokio",
      edad: 35,
      pais: "Japón"
    },
    {
      id: 7,
      nombre: "Laura",
      apellido: "González",
      email: "laura.gonzalez@example.com",
      telefono: "+61412345678",
      foto: "../img/users/laura_gonzalez.png",
      ciudad: "Guadalajara",
      edad: 29,
      pais: "México"
    },
    {
      id: 8,
      nombre: "Diego",
      apellido: "Romero",
      email: "diego.romero@example.com",
      telefono: "+819012345678",
      foto: "../img/users/diego_romero.png",
      ciudad: "Tokio",
      edad: 31,
      pais: "Japón"
    },
    {
      id: 9,
      nombre: "Valentina",
      apellido: "Castro",
      email: "valentina.castro@example.com",
      telefono: "+525555555555",
      foto: "../img/users/valentina_castro.png",
      ciudad: "Ciudad de México",
      edad: 26,
      pais: "México"
    },
    {
      id: 10,
      nombre: "Martín",
      apellido: "Sánchez",
      email: "martin.sanchez@example.com",
      telefono: "+491761234567",
      foto: "../img/users/martin_sanchez.png",
      ciudad: "New York",
      edad: 33,
      pais: "Estados Unidos"
    }
  ];

// Consulta de todos los usuarios registrados
const consultarUsuarios = (req, res) => {
     try {
        
         if (usuarios.length === 0) {
             throw new Error('No hay Usuarios Registrados');
         };

         return res.status(200).json(
             {
                usuarios
             }
         );

     } catch (error) {
         return res.status(404).json(
            {
                 msg: error.message 
            }
        );
     };
};

// Consulta de un usuario por ID
const consultarUsuarioPorId = (req, res) => {
     try {
         const id = parseInt(req.params.id);
         const usuario = usuarios.find(r => r.id === id);

         if (!usuario) {
             throw new Error('Usuario no encontrado');
         };

         return res.status(200).json(
             {
                usuario
             }
         );

     } catch (error) {
         return res.status(404).json(
            { 
                msg: error.message
            }
        );
     };
 };

module.exports = { consultarUsuarios, consultarUsuarioPorId }
