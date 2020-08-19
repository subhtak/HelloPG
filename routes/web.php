<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('/add-item', function () {
    return view('home');
});
Route::get('/display-item', function () {
    return view('home');
});
Route::get('/edit/{id}', function ($id) {
    return view('home');
});
Route::get('/new-payment', function () {
    return view('home');
});
Route::get('/payment-list', function () {
    return view('home');
});