<template>
  <div
    class="flex flex-col justify-center max-w-7xl m-auto mt-4 md:mt-40 dark:bg-gray-800 md:flex-row"
  >
    <div class="w-full md:w-1/2 lg:w-1/2 p-6">
      <h2
        class="text-lg font-semibold text-primary-200 capitalize dark:text-white"
      >
        Já sou cliente
      </h2>

      <div class="my-4">
        <label class="text-gray-700 dark:text-gray-200" for="username"
          >E-mail</label
        >
        <input
          type="text"
          placeholder="Informe seu e-mail"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>

      <div class="mb-4">
        <label class="text-gray-700 dark:text-gray-200" for="username"
          >Senha</label
        >
        <input
          type="text"
          placeholder="Informe sua senha"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>

      <div class="flex justify-start mt-6">
        <button
          class="px-20 py-3 leading-5 text-white transition-colors duration-200 transform bg-primary-200 rounded-md hover:bg-primary-50 focus:outline-none focus:bg-primary-50"
        >
          Continuar
        </button>
      </div>
    </div>

    <div class="border border-gray-400 m-6 md:border-r md:mx-16 md:m-0"></div>

    <div class="w-full md:w-1/2 lg:w-1/2 p-6">
      <h2
        class="text-lg font-semibold text-primary-200 capitalize dark:text-white"
      >
        Criar conta
      </h2>

      <div class="my-4">
        <label class="text-gray-700 dark:text-gray-200" for="username"
          >E-mail</label
        >
        <input
          type="text"
          placeholder="Informe seu e-mail"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>

      <div class="flex justify-start mt-6">
        <button
          class="px-20 py-3 leading-5 text-white transition-colors duration-200 transform bg-primary-200 rounded-md hover:bg-primary-50 focus:outline-none focus:bg-primary-50"
        >
          Cadastra-se
        </button>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-16 mb-16 md:mb-0">
    Ao continuar com o acesso você concorda com a nossa Política de Privacidade
  </div>
</template>
