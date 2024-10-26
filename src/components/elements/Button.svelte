<script>
  export let href = '';
  export let text = '';
  export let primary = false;
</script>

<a 
  href={href} 
  class={`px-5 py-3 sm:px-6 font-semibold rounded-lg transition duration-300 w-full sm:w-auto ${
    primary ? 'bg-tokyo-night-blue text-white hover:bg-tokyo-night-cyan' : 'bg-tokyo-night-gray text-tokyo-night-foreground hover:bg-tokyo-night-darkGray'
  }`}
>
  {text}
</a>

