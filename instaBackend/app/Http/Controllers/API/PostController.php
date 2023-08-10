<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image_url' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $user = Auth::user();

        $post = $user->posts()->create([
            'image_url' => $request->image_url,
        ]);

        return response()->json(['message' => 'Post created', 'post' => $post], 201);
    }

    public function index()
    {
        $posts = Post::with('likes')->latest()->get();
        return response()->json(['posts' => $posts]);
    }

    public function delete(Post $post)
    {
        $user = Auth::user();

        if ($user->id !== $post->user_id) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $post->delete();

        return response()->json(['message' => 'Post deleted']);
    }
}
