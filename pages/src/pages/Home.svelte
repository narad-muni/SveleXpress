<script>
    import { Button, Card } from "flowbite-svelte";
</script>

<Card class="text-center m-auto mt-20" size="lg" padding='xl'>
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome Home</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
      Everything is in order
    </p>
    <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
      <Button class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href="/api/example">Sample GET API</Button>
      <Button class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href="/#/error">Sample Error Page</Button>
    </div>
</Card>

<style>

</style>
  