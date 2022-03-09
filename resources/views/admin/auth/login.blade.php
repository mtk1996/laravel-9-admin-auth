<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Login</title>
    <link rel="stylesheet" href="{{asset('/asset/css/bootstrap.css')}}">
</head>

<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 offset-md-4 offset-lg-4">
                <div class="card">
                    <div class="card-header bg-primary text-white">Admin Login Form</div>
                    <div class="card-body">
                        <form action="{{asset('/adm/login')}}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="">Enter Email</label>
                                <input type="email" name="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Enter Password</label>
                                <input type="password" name="password" class="form-control">
                            </div>
                            <input type="submit" value="Login" class="btn btn-primary">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>

    <script>
        @if(session()->has('success'))
    Toastify({
    text: "{{session('success')}}",
    position:'center',
    style: {
    background: "#27c24c",
    }
    }).showToast();
    @endif

    @if(session()->has('error'))
    Toastify({
    text: "{{session('error')}}",
    position:'center',
    style: {
    background: "#f05050",
    }
    }).showToast();
    @endif
    </script>

</body>

</html>
