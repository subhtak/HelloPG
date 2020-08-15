<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'address', 'mobile', 'pan', 'aadhar', 'building', 'room', 'date_of_coming', 'date_of_vacating'
    ];
}
