<template>
  <div>
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('ja')">ja</button>
    <p>{{ locale }}</p>
    <EventForm title="test" :onConfirm="onConfirm" />
  </div>
</template>

<script setup lang="ts">
import { EventForm } from "#components";

const { locale, setLocale } = useI18n();
const onConfirm = (title: string) => {
  confirm(`You entered: ${title}`);
};
</script>
