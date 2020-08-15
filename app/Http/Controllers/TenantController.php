<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tenant;

class TenantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tenants = Tenant::all();
        return response()->json($tenants);
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
        $tenant = new Tenant([
            'name' => $request->get('name'),
            'address' => $request->get('address'),
            'mobile' => $request->get('mobile'),
            'pan' => $request->get('pan'),
            'aadhar' => $request->get('aadhar'),
            'building' => $request->get('building'),
            'room' => $request->get('room'),
            'date_of_coming' => $request->get('date_of_coming'),
            'date_of_vacating' => $request->get('date_of_vacating'),
          ]);
          $tenant->save();
  
          return response()->json('Tenant Added Successfully.');
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
        $tenant = Tenant::find($id);
        return response()->json($tenant);
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
        $tenant = Tenant::find($id);
        $tenant->name = $request->get('name');
        $tenant->address = $request->get('address');
        $tenant->mobile = $request->get('mobile');
        $tenant->pan = $request->get('pan');
        $tenant->aadhar = $request->get('aadhar');
        $tenant->building = $request->get('building');
        $tenant->room = $request->get('room');
        $tenant->date_of_coming = $request->get('date_of_coming');
        $tenant->date_of_vacating = $request->get('date_of_vacating');
        $tenant->save();

        return response()->json('Tenant Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tenant = Tenant::find($id);
        $tenant->delete();
  
        return response()->json('Tenant Deleted Successfully.');
    }
}
