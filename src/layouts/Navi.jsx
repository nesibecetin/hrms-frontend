import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import "../assets/css/navi.css";

export default function Navi() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  ">
        <a class="navbar-brand" href="#">
          HRMS
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">Burada</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
     
          </ul>
        </div>
        <button type="button" class="btn btn-outline-primary">Giriş Yap</button>
        <button type="button" class="btn btn-outline-primary">Kayıt Ol</button>
      </nav>
    </div>
  );
}
