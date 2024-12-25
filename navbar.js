document.addEventListener("DOMContentLoaded", () => {
  const navbarContent = `
      
<nav class="navbar navbar-expand-lg navbar-custom fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <i class="fas fa-utensils me-2"></i>Bite Burst
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNavbar">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>

       
        <li class="nav-item dropdown dropdown-mega-menu">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Menu
              </a>
              <div class="dropdown-menu">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3 mega-menu-column">
                      <h6 class="mega-menu-title">Burgers</h6>
                      <div class="nav flex-column">
                        <a href="burgers.html" class="mega-menu-link py-1">Zinger Burger</a>
                        <a href="burgers.html" class="mega-menu-link py-1">Mighty Burger</a>
                        <a href="burgers.html" class="mega-menu-link py-1">Beef Burger</a>
                        <a href="burgers.html" class="mega-menu-link py-1">Cheese Burger</a>
                      </div>
                    </div>
                    <div class="col-md-3 mega-menu-column">
                      <h6 class="mega-menu-title">Pizzas</h6>
                      <div class="nav flex-column">
                        <a href="pizza.html" class="mega-menu-link py-1">Chicken tikka</a>
                        <a href="pizza.html" class="mega-menu-link py-1">Cheese</a>
                        <a href="pizza.html" class="mega-menu-link py-1">Fajita</a>
                        <a href="pizza.html" class="mega-menu-link py-1">BBQ Chicken</a>
                      </div>
                    </div>
                    <div class="col-md-3 mega-menu-column">
                      <h6 class="mega-menu-title">Pasta and Fries</h6>
                      <div class="nav flex-column">
                        <a href="pasta-fries.html" class="mega-menu-link py-1">Pastas</a>
                        
                        <a href="pasta-fries.html" class="mega-menu-link py-1">Fries</a>
                        <a href="pasta-fries.html" class="mega-menu-link py-1">Italian Pasta</a>
                      </div>
                    </div>
                    <div class="col-md-3 mega-menu-column">
                      <h6 class="mega-menu-title">Chef's Special</h6>
                      <div class="nav flex-column">
                        <a href="chefs-special.html" class="mega-menu-link py-1"
                          >Our Menu</a
                        >
                        <a href="chefs-special.html" class="mega-menu-link py-1">Weekly Deals</a>
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </li>

        <li class="nav-item">
          <a class="nav-link" href="services.html">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="About.html">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>

      
      <ul class="navbar-nav">
        <li class="nav-item cart-search">
          <div
            class="search-icon"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i class="fas fa-search"></i>
          </div>
          <div
            class="cart-icon"
            data-bs-toggle="modal"
            data-bs-target="#cartModal"
          >
            <i class="fas fa-shopping-cart"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

    `;

  const navbarPlaceholder = document.getElementById("navbar");
  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = navbarContent;
  }
});
