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
          <a class="nav-link" href="/">Home</a>
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
                  <h6 class="mega-menu-title">Cuisine Types</h6>
                  <div class="nav flex-column">
                    <a href="#" class="mega-menu-link py-1">Italian</a>
                    <a href="#" class="mega-menu-link py-1">Mexican</a>
                    <a href="#" class="mega-menu-link py-1">Asian Fusion</a>
                    <a href="#" class="mega-menu-link py-1">Vegetarian</a>
                  </div>
                </div>
                <div class="col-md-3 mega-menu-column">
                  <h6 class="mega-menu-title">Special Diets</h6>
                  <div class="nav flex-column">
                    <a href="#" class="mega-menu-link py-1">Gluten-Free</a>
                    <a href="#" class="mega-menu-link py-1">Vegan</a>
                    <a href="#" class="mega-menu-link py-1">Keto</a>
                    <a href="#" class="mega-menu-link py-1">Low-Carb</a>
                  </div>
                </div>
                <div class="col-md-3 mega-menu-column">
                  <h6 class="mega-menu-title">Meal Types</h6>
                  <div class="nav flex-column">
                    <a href="#" class="mega-menu-link py-1">Appetizers</a>
                    <a href="#" class="mega-menu-link py-1">Main Courses</a>
                    <a href="#" class="mega-menu-link py-1">Desserts</a>
                    <a href="#" class="mega-menu-link py-1">Beverages</a>
                  </div>
                </div>
                <div class="col-md-3 mega-menu-column">
                  <h6 class="mega-menu-title">Promotions</h6>
                  <div class="nav flex-column">
                    <a href="#" class="mega-menu-link py-1"
                      >Chef's Specials</a
                    >
                    <a href="#" class="mega-menu-link py-1">Weekly Deals</a>
                    <a href="#" class="mega-menu-link py-1">Catering</a>
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
  