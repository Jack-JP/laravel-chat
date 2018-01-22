/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueChatScroll from 'vue-chat-scroll';
Vue.use(VueChatScroll);

Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('chat-composer', require('./components/ChatComposer.vue'));

const app = new Vue({
    el: '#app',
    data: {
      messages: []
    },
    methods: {
      addMessage(message){
        this.messages.push(message);

        axios.post('/messages', message).then(response => {

        });
      }
    },
    mounted(){
      axios.get('/messages').then(response => {
        this.messages = response.data;
      });

      Echo.join('chatroom')
            .here()
            .joining()
            .leaving()
            .listen('MessagePosted', (e) => {
              this.messages.push({
                    message: e.message.message,
                    user: e.user
                });
            });
    }

});
