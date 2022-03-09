<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => "adm", 'namespace' => "Admin"], function () {

    Route::group(['middleware' => 'RedirectIfLogin'], function () {
        Route::get('/login', 'AuthController@showLogin');
        Route::post('/login', 'AuthController@postLogin');
    });

    Route::group(['middleware' => "RedirectNotLogin"], function () {
        Route::get('/', 'PageController@showDashboard');
        Route::resource('tag', 'TagController');
    });
});
