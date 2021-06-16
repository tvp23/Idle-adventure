@extends('layout.app')

@section('content')
    <div id="game">
        <h4>Money:</h4>
        <p id="money"></p>
        <div id="attack">
            <h2>Attack</h2>
        </div>
        <h4>Buy an adventurer</h4><br>
        <select id="class">
            <option value="Assassin">Assassin</option>
            <option value="Warrior">Warrior</option>
            <option value="Mage">Mage</option>
            <option value="Hunter">Hunter</option>
            <option value="Priest">Priest</option>
            <option value="Necromancer">Necromancer</option>
            <option value="Lancer">Lancer</option>
        </select>
        <select id="amount">
            <option value="1">1</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="250">250</option>
            <option value="500">500</option>
            <option value="Max">MAX</option>
        </select>
        <button id="buyclass">Buy</button>
        <h3 id="buysword">buy sword</h3>
        <p>a sword increasess your click damage by 10dpc</p>
    </div>
@endsection
<script>
</script>
