<?php


namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class FollowController extends Controller

{    
    
    public function follow(User $user){

        $authenticatedUser = auth()->user();
        if (!$authenticatedUser) {
        return response()->json(['message' => $authenticatedUser], 401);
    }
    $authenticatedUser->following()->attach($user);
    return response()->json(['message' => 'Followed successfully']);
}

    public function unfollow(User $user)
    {
        auth()->user()->following()->detach($user);
        return response()->json(['message' => 'Unfollowed successfully']);
    }
}
