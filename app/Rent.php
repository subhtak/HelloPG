<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rent extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tenant_id','tenant_name','rent','for_month_of','mode_of_payment','date_of_payment'
    ];
}
