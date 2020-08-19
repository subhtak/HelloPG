<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Rent;
use App\Tenant;

class RentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rents = Rent::all();
        return response()->json($rents);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tenant = Tenant::whereId($request->get('tenant_id'))->first();
        // echo $tenant->name;
        // exit;
        $rent = new Rent([
            'tenant_id' => $request->get('tenant_id'),
            'tenant_name' => $tenant->name,
            'rent' => $request->get('rent'),
            'for_month_of' => $request->get('for_month_of'),
            'mode_of_payment' => $request->get('mode_of_payment'),
            'date_of_payment' => $request->get('date_of_payment')
          ]);
          $rent->save();
  
          return response()->json('Rent Added Successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $rent = Rent::find($id);
        return response()->json($rent);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $rent = Rent::find($id);
        $rent->tenant_id = $request->get('tenant_id');
        $rent->rent = $request->get('rent');
        $rent->for_month_of = $request->get('for_month_of');
        $rent->mode_of_payment = $request->get('mode_of_payment');
        $rent->date_of_payment = $request->get('date_of_payment');
        $rent->save();

        return response()->json('Rent Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $rent = Rent::find($id);
        $rent->delete();
  
        return response()->json('Rent Deleted Successfully.');
    }
}