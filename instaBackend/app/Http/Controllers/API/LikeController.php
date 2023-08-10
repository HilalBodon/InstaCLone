<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function like(Post $post)
    {
        $user = auth()->user();
        $user->likes()->attach($post->id);

        return response()->json(['message' => 'Post liked']);
    }

    public function unlike(Post $post)
    {
        $user = auth()->user();
        $user->likes()->detach($post->id);

        return response()->json(['message' => 'Post unliked']);
    }
}
