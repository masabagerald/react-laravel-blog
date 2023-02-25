<?php

use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();

});

Route::post('login' ,['uses'=>'Auth\LoginController@login','as'=> 'login']);
Route::post('register' ,['uses'=>'Auth\RegisterController@register','as'=> 'register']);
Route::get('logout' ,['uses'=>'Auth\LoginController@logout','as'=> 'logout']);
Route::get('check-auth' ,['uses'=>'Auth\LoginController@checkAuth','as'=> 'check-auth']);



Route::resource('categories', 'CategoryController');
Route::resource('posts', 'PostsController');
Route::resource('tags', 'TagsController');
Route::resource('comments', 'CommentsController');
Route::get('profile', 'UsersController@profile');
Route::resource('users', 'UsersController');
Route::post('profile/update', 'UsersController@updateProfile');

