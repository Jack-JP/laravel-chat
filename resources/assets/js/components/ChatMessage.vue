<template>
  <div>
    <ul class="list-group chatList">
      <li class="list-group-item "><small>{{ message.user.name }}</small> - {{ message.message }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['message']

}
</script>
<style>

</style>
