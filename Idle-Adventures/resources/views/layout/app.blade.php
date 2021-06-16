<html>
<head>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <script src="{{ asset('js/game/main.js') }}" defer></script>
    <title>Idle adventures</title>
</head>
<body>
<div id="app">
    <div class="container">
        @yield('content')
    </div>
</div>
</body>
</html>
