<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $fillable = [
    	'name', 'description', 'image'
    ];

    public function user()
    {
    	return $this->belongsTo('App\User');
    }

    public static function form()
    {
        return [
            'name' => '',
            'image' => '',
            'description' => ''
            
        ];
    }
}
