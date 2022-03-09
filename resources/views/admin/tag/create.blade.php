@extends('admin.layout.master')

@section('content')
<a href="{{route('tag.index')}}" class="btn btn-dark">
    <i class="fa fa-arrow-left"></i>
</a>
<div class="card mt-2">
    <div class="card-body">
        <form action="{{route('tag.store')}}" method="POST">
            @csrf
            <div class="form-group">
                <label for="">Enter Tag name</label>
                <input type="text" class="form-control" name="name">
            </div>
            <input type="submit" value="Create" class="btn btn-success">
        </form>
    </div>
</div>
@endsection
