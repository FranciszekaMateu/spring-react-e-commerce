package com.TechEcommerce.Entities;

public abstract class User {
    protected String correo;
    protected String contraseña;
    protected String nombre;

    public User(String correo, String contraseña, String nombre) {
        this.correo = correo;
        this.contraseña = contraseña;
        this.nombre = nombre;
    }

    // Getters y setters para los atributos
    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

