<template>
  <div>
    <p>{{ myTrans("titleMax") }}</p>
  </div>
</template>

<script setup lang="ts">
const { myTrans } = useI18nHelpers();
</script>
