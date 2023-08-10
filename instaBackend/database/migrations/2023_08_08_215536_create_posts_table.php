<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // public function up()
    // {
    //     Schema::create('posts', function (Blueprint $table) {
    //         $table->id();
    //         $table->unsignedBigInteger('user_id');
    //         $table->string('image_url');
    //         $table->integer('num_likes')->default(0);
    //         $table->timestamps();
    
    //         $table->foreign('user_id')->references('id')->on('users');
    //     });
    // }

        public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('image_url');
            $table->timestamps();
            
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
