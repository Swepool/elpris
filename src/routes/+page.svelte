<script>
    export const ssr = true
    import {chill, dishwasher, shower} from "../utils/index.js";

    export let data

    let currentPrice = data.currentPrice
</script>

<div class="grid container">
    <div class="card">
        <h3>Current price:</h3>
        <h2>{currentPrice} € / kWh</h2>
    </div>
    <div class="card">
        <h3>Shower (10min):</h3>
        <h2>{shower(currentPrice, 10)} €</h2>
    </div>
    <div class="card">
        <h3>Dishwasher:</h3>
        <h2>{dishwasher(currentPrice)} €</h2>
    </div>
    <div class="card">
        <h3>Air Condition (1hour):</h3>
        <h2>{chill(currentPrice)} €</h2>
    </div>
</div>



<style lang="scss">
    .grid {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(12, minmax(0, 1fr));
    }

    .card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        border-radius: 10px;
        background-color: var(--card-background);
        grid-column: span 6 / span 6;
        border: var(--card-border);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05),
        0 6px 6px rgba(0, 0, 0, 0.10);

      h3 {
        font-weight: 200;
      }

      h2 {
        font-weight: 400;
      }
    }

    @media screen and (max-width: 568px) {
        .card {
            grid-column: span 12 / span 12;
        }
    }
</style>
