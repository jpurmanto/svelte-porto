<script>
  let toggleMenu = false;

  const toggleNavbar = () => {
    toggleMenu = !toggleMenu;
  };

  const links = {
    Home: "#",
    About: "#",
    Experience: "#",
    Projects: "#",
    Contact: "#",
  };
</script>

<nav class="fixed w-full backdrop-blur-lg bg-opacity-90 text-tokyo-night-foreground bg-tokyo-night-background z-50">
  <div class="mx-auto">
    <div class="flex mx-auto justify-between w-5/6 py-5">
      <div class="flex items-center gap-5">
        <span class="text-3xl font-bold">slowcode07</span>
      </div>
      <div class="hidden lg:flex gap-8 ml-auto">
        {#each Object.entries(links) as [name, url]}
          <a href={url} class="rounded-full hover:bg-gray-800 px-4 py-2">{name}</a>
        {/each}
      </div>
      <div class="flex gap-6 lg:hidden">
        <button on:click={toggleNavbar}>
          <svg class="h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class={`fixed w-full overflow-x-hidden flex flex-col lg:hidden gap-12 origin-top transition-all duration-300 ${toggleMenu ? 'max-h-[320px] opacity-100' : 'max-h-0 opacity-0'}`}>
    <div class="w-[90%] mt-5 mx-[5%] relative backdrop-filter bg-tokyo-night-darkBlue bg-opacity-100 py-5 border border-white rounded-md">
      <div class="mx-8 flex flex-col gap-8 font-bold tracking-wider">
        {#each Object.entries(links) as [name, url]}
          <a href={url} class="transition-colors hover:text-gray-300">{name}</a>
        {/each}
      </div>
    </div>
  </div>
</nav>

<style>
  .navbar-menu {
    transition: max-height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease forwards;
    opacity: 0;
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

