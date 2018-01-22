<template>
  <div class="row">
    <div class="col-xs-8">
      <input type="text" class="form-control" placeholder="Message here..." v-model="messageText" @keyup.enter="send">
      <button type="button" class="btn btn-info" name="button" @click="send">Send</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      messageText: '',
    }
  },
  methods: {
    send(){
      this.$emit('messagesent', {
        message: this.messageText,
        user: {
          name: 'You'
        }
      });
      this.messageText = "";
    }
  }
}
</script>
<style>

</style>
