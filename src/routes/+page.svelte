<script>
    import {chill, dishwasher, shower} from "../utils/index.js";

    export let data

    let currentPrice = data.currentPrice
</script>

<div class="grid">
    <div class="card">
        <h3>Current price:</h3>
        <h2>€{currentPrice} / kWh</h2>
    </div>
    <div class="card">
        <h3>Shower(10min):</h3>
        <h2>€{shower(currentPrice, 10)}</h2>
    </div>
    <div class="card">
        <h3>Dishwasher:</h3>
        <h2>€{dishwasher(currentPrice)}</h2>
    </div>
    <div class="card">
        <h3>Air Condition (1hour):</h3>
        <h2>€{chill(currentPrice)}</h2>
    </div>
</div>



<style>

    h1, h2, h3, h4, h5, h6 {
        font-family: Arial;
        margin: 0;
    }

    .grid {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        max-width: 1000px;
        margin: 0 auto;
    }

    .card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        border-radius: 10px;
        background-color: aliceblue;
        grid-column: span 6 / span 6;
        border: 1px solid lightblue;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05),
        0 6px 6px rgba(0, 0, 0, 0.10);
    }

    @media screen and (max-width: 568px) {
        .card {
            grid-column: span 12 / span 12;
        }
    }
</style>
