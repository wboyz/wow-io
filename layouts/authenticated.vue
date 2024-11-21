<template>
  <header>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <button tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>
              <NuxtLink to="/mythic-profile">Mythic Profile</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/fetch-anything">Fetch Anything</NuxtLink>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">WoW IO</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li>
            <NuxtLink to="/mythic-profile">Mythic Profile</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/fetch-anything">Fetch Anything</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end"></div>
    </div>
  </header>
  <slot />
</template>
