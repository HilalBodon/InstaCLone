<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('followers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');            // The user who is following
            $table->unsignedBigInteger('follower_user_id');   // The user who is being followed
            $table->timestamps();
    
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('follower_user_id')->references('id')->on('users');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('followers');
    }
    
    
    
};
