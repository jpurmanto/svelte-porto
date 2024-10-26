<script>
  let toggleMenu = false;

  const toggleNavbar = () => {
    toggleMenu = !toggleMenu;
  };
</script>

<nav class="fixed w-full backdrop-blur-lg bg-opacity-30" style="z-index: 2;">
  <div class="mx-auto">
    <div class="flex mx-auto justify-between w-5/6 p-5">
      <div class="flex items-center gap-5">
        <span class="text-3xl font-bold">r code.</span>
      </div>
      <div class="hidden lg:flex gap-8 ml-auto">
        <a href="#" class="rounded-full hover:bg-gray-100 px-4 py-2">Home</a>
        <a href="#" class="rounded-full hover:bg-gray-100 px-4 py-2">About</a>
        <a href="#" class="rounded-full hover:bg-gray-100 px-4 py-2">Experience</a>
        <a href="#" class="rounded-full hover:bg-gray-100 px-4 py-2">Projects</a>
        <a href="#" class="rounded-full hover:bg-gray-100 px-4 py-2">Contact</a>
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
  <div class={`fixed z-40 w-full overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${toggleMenu ? 'h-[320px]' : 'h-0'}`}>
    <div class="w-[90%] mt-5 h-[110%] mx-[5%] relative backdrop-filter bg-black backdrop-blur-lg bg-opacity-60 py-5 border border-white rounded-md">
      <div class="mx-8 flex flex-col gap-8 font-bold tracking-wider">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Jobs</a>
        <a href="#">Category</a>
        <a href="#">Contact</a>
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

