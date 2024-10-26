<script>
  import Button from "../elements/Button.svelte";
  import ProfileImage from "../fragments/ProfileImage.svelte";
  import HeroTitle from "../fragments/HeroTitle.svelte";
  import HeroDescription from "../fragments/HeroDescription.svelte";
</script>

<section class="flex justify-center items-center h-screen bg-tokyo-night-background text-tokyo-night-foreground">
  <div class="flex flex-col sm:flex-row max-w-5xl mx-auto px-4 sm:px-6 w-full">
    <div class="w-full sm:w-1/2 flex justify-center items-center">
      <ProfileImage />
    </div>
    <div class="flex flex-col justify-center w-full sm:w-1/2 p-4">
      <HeroTitle />
      <HeroDescription />
      <div class="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
        <Button href="#portfolio" text="Download CV" primary />
        <Button href="#contact" text="Github" />
      </div>
    </div>
  </div>
</section>

