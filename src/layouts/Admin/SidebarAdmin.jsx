import React from "react";
import { Link } from "react-router-dom";

export default function SidebarAdmin() {
  return (
    <div>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ height: "100%", position: "fixed", zIndex:999}}
      >
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link to="/admin/ispozisyonuekle" class="nav-link active" aria-current="page">
              <svg class="bi me-2" width="16" height="16"></svg>
              İş Pozizyonları
            </Link>
          </li>
          <li>
            <Link to="" class="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"></svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="" class="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"></svg>
              Orders
            </Link>
          </li>
          <li>
            <Link to="" class="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"></svg>
              Products
            </Link>
          </li>
          
        </ul>
        <div class="dropdown">
          <Link
            href="#"
            class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </Link>
          <ul
            class="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <Link class="dropdown-item" to="">
                Profile
              </Link>
            </li>

            <li>
              <Link class="dropdown-item" to="">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
