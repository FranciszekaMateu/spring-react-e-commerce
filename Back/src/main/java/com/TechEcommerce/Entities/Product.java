package com.TechEcommerce.Entities;

import java.util.ArrayList;
import java.util.List;

public class Product {
    private double precio;
    private String imagen;
    private String descripcion;
    private String nombre;
    private List<String> categorias;
    private List<String> fotos;

    public Product(double precio, String imagen, String descripcion, String nombre, List<String> categorias, List<String> fotos) {
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.categorias = categorias;
        this.fotos = fotos;
    }

    // Getters y setters para los atributos
    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<String> getCategorias() {
        return categorias;
    }

    public void setCategorias(List<String> categorias) {
        this.categorias = categorias;
    }

    public List<String> getFotos() {
        return fotos;
    }

    public void setFotos(List<String> fotos) {
        this.fotos = fotos;
    }
}
