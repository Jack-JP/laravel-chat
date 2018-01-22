@extends('layouts.app')

@section('content')
<div id="app">
  <div class="container sb">
    <h2 class="text-center">Code Gorilla Chatroom</h2>
    <div class="row">
      <chat-log :messages="messages"></chat-log>

      <chat-composer @messagesent="addMessage"></chat-composer>
    </div>
  </div>

</div>
@endsection
