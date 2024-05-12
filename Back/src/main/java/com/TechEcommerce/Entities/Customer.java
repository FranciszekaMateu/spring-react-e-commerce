package com.TechEcommerce.Entities;

public class Customer extends User {
    private Cart cart;

    public Customer(String correo, String contraseña, String nombre) {
        super(correo, contraseña, nombre);
        this.cart = new Cart();
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }
}

