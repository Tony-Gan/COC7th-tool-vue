<template>
  <div class="row-kvp">
    <h5>{{ cKey }}</h5>
    <p>{{ cValue }}</p>
  </div>
</template>

<script>
export default {
  props: {
    cKey: {
      type: String,
      required: true,
    },
    cValue: {
      type: Number,
      required: true,
    },
  },
};
</script>
