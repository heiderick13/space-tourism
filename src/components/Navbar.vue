<script>
export default {
    name: "Navbar",
}
</script>

<template>
    <div class="navbar d-flex py-4 px-5 pe-0">
        <div class="nav-brand">
            <img src="../assets/shared/logo.svg" alt="logo">
        </div>
        <ul class="nav-links d-flex py-4 px-5 ">
            <li class="nav-link">
                <RouterLink to="/"> <b class="pe-1">00</b> home</RouterLink>
            </li>
            <li class="nav-link">
                <RouterLink to="/destinations"> <b class="pe-1">01</b> destination</RouterLink>
            </li>
            <li class="nav-link">
                <RouterLink to="/crew"> <b class="pe-1">02</b> crew</RouterLink>
            </li>
            <li class="nav-link">
                <RouterLink to="/technologies"> <b class="pe-1">03</b> technology</RouterLink>
            </li>
        </ul>
    </div>
</template>

<style>
.navbar {
    justify-content: space-between;
    align-items: center;
}

.nav-brand {
    position: relative;
}

.nav-brand::after {
    content: "";
    position: absolute;
    top: 40%;
    left: 100%;
    right: -500%;
    color: #fefefe;
    background-color: #fefefe;
    height: 1px;
    width: 500px;
    margin-left: 130px;
    opacity: .2;
    z-index: 2;
}

.navbar li {
    list-style: none;
}

.nav-links {
    background-color: hsla(0, 0%, 60%, 0.2);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    text-transform: uppercase;
}

.nav-link a {
    color: #fefefe;
    text-decoration: none;
    letter-spacing: 1px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    padding-left: 2rem;
}

.nav-link:last-child a {
    padding-right: 12rem;
}

@media screen and (max-width: 768px) {
    .nav-brand::after {
        display: none;
    }
}
</style>