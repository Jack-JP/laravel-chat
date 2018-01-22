<template>
  <div class="sb">
    <chat-message v-for="message in messages" :key="message.id" :message="message"></chat-message>
    <div class="empty" v-show="messages.length === 0">Start the chat.</div>
  </div>
</template>
<script>
export default {
  props: ['messages']
}
</script>
<style>

</style>
