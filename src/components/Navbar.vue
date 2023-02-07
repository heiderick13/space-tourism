<script>
export default {
    name: "Navbar",
}
</script>

<template>
    <div class="navbar py-4 px-5 pe-0">
        <div class="nav-brand">
            <img src="../assets/shared/logo.svg" alt="logo">
        </div>
        <ul class="nav-links d-flex py-4 px-5 ">
            <li class="nav-link">
                <RouterLink to="/">00 home</RouterLink>
            </li>
            <li class="nav-link">
                <RouterLink to="/destinations">01 destination</RouterLink>
            </li>
            <li class="nav-link">
                <RouterLink to="/crew">02 crew</RouterLink>
            </li>
            <li class="nav-link">
                <RouterLink to="/technologies">03 technology</RouterLink>
            </li>
        </ul>
    </div>
</template>

<style>
.navbar li {
    list-style: none;
}

.nav-links {
    background-color: hsla(0, 1%, 65%, 0.356);
    align-items: center;
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    text-transform: uppercase;
}

.nav-link a {
    color: #fefefe;
    text-decoration: none;
    padding-left: 1.5rem;
}

.nav-link:last-child a {
    padding-right: 12rem;
}
</style>