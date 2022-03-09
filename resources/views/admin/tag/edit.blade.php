@extends('admin.layout.master')

@section('content')
<a href="{{route('tag.index')}}" class="btn btn-dark">
    <i class="fa fa-arrow-left"></i>
</a>
<div class="card mt-2">
    <div class="card-body">
        <form action="{{route('tag.update',$tag->slug)}}" method="POST">
            @csrf
            @method('PUT')
            <div class="form-group">
                <label for="">Enter Tag name</label>
                <input type="text" class="form-control" name="name" value="{{$tag->name}}">
            </div>
            <input type="submit" value="Update" class="btn btn-success">
        </form>
    </div>
</div>
@endsection
