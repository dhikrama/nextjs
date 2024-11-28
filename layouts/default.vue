<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MauNguli",
        "url": "https://www.maunguli.com",
        "logo": "https://www.maunguli.com/logo.png"
      })
    }
  ]
});
</script>
