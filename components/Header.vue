<template>
  <header class="text-gray-600 body-font bg-primary-200">
    <div
      class="container mx-auto flex flex-wrap pt-4 flex-col md:flex-row items-center justify-center"
    >
      <Logo />
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center w-4/12"
      >
        <input
          type="text"
          placeholder="Buscar"
          class="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </nav>
      <div class="flex">
        <NuxtLink
        to="/teste"
          class="block items-center justify-center text-center cursor-pointer mr-6"
        >
          <div
            class="w-9 h-9 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
          >
            <IconsCart />
          </div>
          <p class="text-white mt-1">Carrinho</p>
        </NuxtLink>

        <NuxtLink
          to="/login"
          class="block items-center justify-center text-center cursor-pointer"
        >
          <div
            class="w-9 h-9 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
          >
            <IconsProfile />
          </div>
          <p class="text-white mt-1">Meu Perfil</p>
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-center items-center space-x-14 mb-2">
      <p class="cursor-pointer text-white mt-1">Engenheiro Virtual</p>
      <p class="cursor-pointer text-white mt-1">Equipamentos</p>
      <p class="cursor-pointer text-white mt-1">Kits Fechados</p>
    </div>
  </header>
</template>
