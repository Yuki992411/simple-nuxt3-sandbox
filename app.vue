<template>
  <div>
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('ja')">ja</button>
    <p>{{ locale }}</p>
    <EventForm />
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();
</script>
