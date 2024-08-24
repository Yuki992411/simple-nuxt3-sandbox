<template>
  <div>
    <p v-if="title && title.length > 0">{{ title }}</p>
    <p v-else>Default Title</p>
    <p>{{ myTrans("titleMax") }}</p>
    <button @click="onConfirm(title)" v-if="title && title.length > 0">
      Confirm
    </button>
    <Contents />
  </div>
</template>

<script setup lang="ts">
import { Contents } from "#components";
import { useI18nHelpers } from "~/composables/useI18nHelpers.js";

const props = defineProps<{
  title?: string;
  onConfirm: (title: string) => void;
}>();

const title = ref(props.title);
const { myTrans } = useI18nHelpers();
</script>
