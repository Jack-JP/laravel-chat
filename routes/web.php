<?php
use App\Events\MessagePosted;

Route::get('/', function () {
    return view('welcome');
});



Route::get('/chat', 'ChatController@index');

Route::get('/messages', function(){
  return App\Message::with('user')->get();
})->middleware('auth');

Route::post('/messages', function(){
  $user = Auth::user();
  $message = $user->message()->create([
    'message' => request()->get("message"),
  ]);

  broadcast(new MessagePosted($message, $user))->toOthers();

  return ['status' => 'OK'];
})->middleware('auth');
Auth::routes();
