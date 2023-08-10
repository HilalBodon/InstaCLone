<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\FollowController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);

// Route::middleware('auth:sanctum')->group(function () {
    Route::post('/users/{user}/follow', [FollowController::class, 'follow']);
    Route::post('/users/{user}/unfollow', [FollowController::class, 'unfollow']);
    
// });