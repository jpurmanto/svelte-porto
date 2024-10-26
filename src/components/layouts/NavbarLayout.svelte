<script>
  let toggleMenu = false;

  const toggleNavbar = () => {
    toggleMenu = !toggleMenu;
  };
</script>

<nav class="fixed w-full backdrop-blur-lg bg-opacity-90 text-tokyo-night-foreground bg-tokyo-night-background z-50">
  <div class="mx-auto">
    <div class="flex mx-auto justify-between w-5/6 py-5">
      <div class="flex items-center gap-5">
        <span class="text-3xl font-bold">slowcode07</span>
      </div>
      <div class="hidden lg:flex gap-8 ml-auto">
        <a href="#" class="rounded-full hover:bg-gray-800 px-4 py-2">Home</a>
        <a href="#" class="rounded-full hover:bg-gray-800 px-4 py-2">About</a>
        <a href="#" class="rounded-full hover:bg-gray-800 px-4 py-2">Experience</a>
        <a href="#" class="rounded-full hover:bg-gray-800 px-4 py-2">Projects</a>
        <a href="#" class="rounded-full hover:bg-gray-800 px-4 py-2">Contact</a>
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
  <div class={`fixed w-full overflow-x-hidden flex flex-col lg:hidden gap-12 origin-top transition-all duration-500 ${toggleMenu ? 'h-[320px] opacity-100' : 'h-0 opacity-0'}`}>
    <div class="w-[90%] mt-5 mx-[5%] relative backdrop-filter bg-tokyo-night-darkBlue backdrop-blur-lg bg-opacity-90 py-5 border border-white rounded-md">
      <div class="mx-8 flex flex-col gap-8 font-bold tracking-wider">
        <a href="#" class="transition-colors hover:text-gray-300">Home</a>
        <a href="#" class="transition-colors hover:text-gray-300">About</a>
        <a href="#" class="transition-colors hover:text-gray-300">Experience</a>
        <a href="#" class="transition-colors hover:text-gray-300">Projects</a>
        <a href="#" class="transition-colors hover:text-gray-300">Contact</a>
      </div>
    </div>
  </div>
</nav>

<style>
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

