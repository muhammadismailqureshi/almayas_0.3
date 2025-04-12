<template>
  <header class="header">
    <h1>Almayas</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/cart">Cart</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #f8f9fa;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}
h1 {
  margin: 0;
  font-size: 1.5em;
}
nav {
  display: flex;
  gap: 20px;
}
a {
  text-decoration: none;
  color: #007bff;
  font-weight: 500;
}
a:hover {
  color: #0056b3;
}
</style>
