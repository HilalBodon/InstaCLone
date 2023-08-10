<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('q');
        $users = User::where('name', 'LIKE', "%$query%")
                     ->orWhere('username', 'LIKE', "%$query%")
                     ->get();

        return response()->json(['users' => $users]);
    }
}
