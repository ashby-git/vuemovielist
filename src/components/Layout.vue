<template>
  <header class="Header">
    <router-link class="LogoLink" to="/">
      <div class="Logo">VueMovieList</div>
    </router-link>
    <nav>
      <ul class="NavLinkGroup">
        <li class="NavLinkItem">
          <router-link class="PageLink" to="/auth">Login</router-link>
        </li>
        <li class="NavLinkItem">
          <router-link class="PageLink" to="/search">Search</router-link>
        </li>
        <li class="NavLinkItem">
          <router-link class="PageLink" to="/profile">MyList</router-link>
        </li>
        <li class="NavLinkItem">
          <button class="LogoutButton">Logout</button>
        </li>
      </ul>
      <div class="MenuIconWrapper">
        <i class="fas fa-bars"></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style scoped>
.Header {
  height: 5rem;
  background-color: #38015c;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  position: fixed;
  width: 80%;
  z-index: 20;
}
.LogoLink {
  text-decoration: inherit;
  color: inherit;
}
.Logo {
  font-family: "Lato", sans-serif;
  font-size: 2rem;
  color: white;
  margin: 0;
}
.NavLinkGroup {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
}

.MenuIconWrapper {
  color: white;
  font-size: 2rem;
  cursor: pointer;
  display: none;
}
.NavLinkItem {
  margin: 0 1rem;
}
.PageLink {
  text-decoration: none;
  color: white;
  font-weight: bold;

  /* 
  &.${(props) => props.activeClassName} {
    text-decoration: underline;
  } */
}
.PageLink:hover {
  color: #c291e2;
}

.LogoutButton {
  font: inherit;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
}
.LogoutButton:hover {
  background-color: #c291e2;
  color: #38015c;
}

@media (max-width: 700px) {
  .NavLinkGroup {
    display: none;
  }
  .MenuIconWrapper {
    display: block;
  }
}
</style>
