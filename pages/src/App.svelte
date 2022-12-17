<script>
  import Home from './pages/Home.svelte'
  import NotFound from './pages/Error.svelte'
  import Router from 'svelte-spa-router'

  const routes = {
      // Exact path
      '/': Home,
      '*': NotFound,
  }
</script>

<body>
  <Router {routes}/>
</body>