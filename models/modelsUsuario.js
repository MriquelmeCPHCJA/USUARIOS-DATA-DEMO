class Usuario {
    constructor(id, nombre, apellido, email, telefono, foto, ciudad, edad, pais) {
        this.id = id,
        this.nombre = nombre,
        this.apellido = apellido,
        this.email = email,
        this.telefono = telefono,
        this.foto = foto,
        this.ciudad = ciudad,
        this.edad = edad,
        this.pais = pais
    }
}

module.exports =  Usuario;