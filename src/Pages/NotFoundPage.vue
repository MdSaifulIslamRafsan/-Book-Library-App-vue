
<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p class="text-2xl text-gray-600 mb-8">Not Found Page</p>
      <RouterLink to="/" class="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
        Go back to Home
      </RouterLink>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundPage',
  };
  </script>
  