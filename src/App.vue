<template>
  <main class="relative flex items-center justify-center min-h-screen px-4 py-8 md:py-16 md:px-8 bg-light-100 dark:bg-dark-100">
    <div class="flex-grow max-w-2xl">
      <div class="grid mb-10 text-black dark:text-white place-items-center">
        <div class="mb-6 text-4xl font-bold text-center">💉 magikal.&ZeroWidthSpace;eenprik.nl</div>
        <div class="text-center max-w-[60ch] mb-6">Check met behulp van gescrapede gegevens van <a href="https://coronatest.nl" target="_blank" rel="noopener" class="inline-block text-blue-700 rounded-md dark:text-blue-400 focus:outline-none focus:ring focus:ring-offset-8 focus:ring-offset-light-100 dark:focus:ring-offset-dark-100 focus:ring-blue-700 dark:focus:ring-blue-400 focus:ring-opacity-75 hover:underline focus:underline">coronatest.nl</a> of jij al in aanmerking komt voor een vaccinatie!</div>
        <div class="text-center max-w-[60ch]">
          <strong>Update 3 juni 2021</strong>
          <div>Het is inmiddels onmogelijk gemaakt om de API te gebruiken op de manier hoe ik dit deed (<a class="inline-block text-blue-700 rounded-md dark:text-blue-400 focus:outline-none focus:ring focus:ring-offset-8 focus:ring-offset-light-100 dark:focus:ring-offset-dark-100 focus:ring-blue-700 dark:focus:ring-blue-400 focus:ring-opacity-75 hover:underline focus:underline" href="https://en.wikipedia.org/wiki/Rate_limiting" target="_blank" rel="noopener">lees meer over rate limiting</a>). Ik zal mijn best doen om de check handmatig zo up to date mogelijk te houden.</div>
          <div class="mt-2">- Jochem</div>
        </div>
      </div>
      <router-view/>
      <div class="mt-8 text-light-300 dark:text-dark-700">
        <div class="mb-4 text-center text-inter-sm">by</div>
        <figure class="w-20 mx-auto">
          <a href="https://jochemkeller.nl" target="_blank" rel="noopener" class="block transition-colors duration-300 ease-in-out rounded-md focus:ring-offset-light-100 hover:text-black focus:text-black dark:hover:text-white dark:focus:text-white focus:outline-none focus:ring focus:ring-offset-8 dark:focus:ring-offset-dark-100 focus:ring-red-400 focus:ring-opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 37"><path d="M37.026 12.47c-3.54 0-6.445 1.144-8.7 3.432-2.254 2.287-3.376 5.219-3.376 8.816 0 3.601 1.122 6.556 3.376 8.843 2.255 2.264 5.16 3.416 8.7 3.416 4.828 0 8.128-1.218 9.898-3.686l-3.873-3.909c-1.771 1.312-3.784 1.954-6.04 1.954-1.284 0-2.407-.365-3.375-1.1-.966-.73-1.527-1.764-1.694-3.051h16.662v-2.469c0-3.598-1.044-6.529-3.135-8.816-2.086-2.285-4.902-3.43-8.443-3.43zm-4.841 9.809c0-1.312.487-2.324 1.453-3.08.968-.732 2.089-1.097 3.388-1.097 1.288 0 2.409.364 3.377 1.097.967.757 1.452 1.769 1.452 3.08h-9.67zM54.249 0h6.764v36.979h-6.764zM67.438 0h6.766v36.979h-6.766zM91.755 12.47c-3.542 0-6.444 1.144-8.711 3.432-2.242 2.287-3.362 5.219-3.362 8.816 0 3.601 1.12 6.556 3.362 8.843 2.267 2.264 5.169 3.416 8.711 3.416 4.819 0 8.115-1.218 9.898-3.686l-3.87-3.909c-1.761 1.312-3.783 1.954-6.028 1.954-1.295 0-2.419-.365-3.385-1.1-.97-.73-1.542-1.764-1.696-3.051h16.675v-2.469c0-3.598-1.058-6.529-3.148-8.816-2.089-2.285-4.904-3.43-8.446-3.43zm-4.838 9.809c0-1.312.483-2.324 1.451-3.08.966-.732 2.09-1.097 3.385-1.097 1.275 0 2.395.364 3.364 1.097.969.757 1.457 1.769 1.457 3.08h-9.657zM15.312 12.47l-8.063 9.787V12.47H.001v24.509h7.248v-9.777l8.063 9.777h8.181l-10.367-12.26L23.493 12.47zM122.155 12.49c-2.492 0-4.588.9-6.309 2.699V12.47h-6.75V37h6.75V21.932c1.096-2.302 2.457-3.626 4.113-3.626h5.04V12.49c-1.172.014-2.062 0-2.844 0z" fill="currentColor"/></svg>
          </a>
        </figure>
      </div>
    </div>
  </main>
</template>
