@extends('admin.layout.master')

@section('content')
<a href="{{route('tag.create')}}" class="btn btn-success">
    Create
</a>
<div class="card mt-3">
    <div class="card-body">
        <table class="table table-striped ">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Option</td>
                </tr>
            </thead>
            <tbody>
                @foreach ($tag as $t)
                <tr>
                    <td>{{$t->name}}</td>
                    <td>
                        <a href="{{route('tag.edit',$t->slug)}}" class="btn btn-primary">
                            <i class="fa fa-edit"></i>
                        </a>

                        <form action="{{route('tag.destroy',$t->slug)}}" class="d-inline" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">
                                <i class="fa fa-trash"></i>
                            </button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection
