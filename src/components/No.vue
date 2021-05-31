<template>
    <div>
        <h1 class="mb-4 text-2xl font-bold">⏳ Nog <span class="italic">eeeeeventjes</span> wachten...</h1>
        <p>Helaas is jouw geboortejaar nog <strong>niet</strong> aan de beurt op dit moment. Het gaat heel rap nu, dus check back soon... 😏</p>
        <img src="/images/no.gif" alt="Sure, I'll wait..." class="inline-block max-w-full mt-6">
    </div>
</template>

<style scoped>
  .pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    transition: filter 250ms;
    border-radius: 1rem;
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background: hsl(120deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background: linear-gradient(
      to left,
      hsl(120deg 100% 16%) 0%,
      hsl(120deg 100% 32%) 8%,
      hsl(120deg 100% 32%) 92%,
      hsl(120deg 100% 16%) 100%
    );
  }
  .front {
    display: block;
    position: relative;
    padding: 12px 42px;
    border-radius: 1rem;
    font-size: 1.25rem;
    color: black;
    background: hsl(125deg 100% 47%);
    will-change: transform;
    transform: translateY(-4px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  .pushable:hover {
    filter: brightness(110%);
  }
  .pushable:hover .front {
    transform: translateY(-6px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  .pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  .pushable:hover .shadow {
    transform: translateY(4px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  .pushable:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  .pushable:focus:not(:focus-visible) {
    outline: none;
  }
</style>