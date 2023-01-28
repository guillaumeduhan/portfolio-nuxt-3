<template>
  <div>
    <Head>
      <Title>Guillaume Duhan</Title>
    </Head>
    <!-- https://content.nuxtjs.org/api/components/content-slot -->
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>