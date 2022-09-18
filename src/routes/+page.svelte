<script>
    export const ssr = true
    import {getAc, getDishwasher, getShower, getWasherDryer} from "../utils/index.js";

    export let data

    let currentPrice = data.currentPrice
    let highestPrice = (data.priceTable.sort((a,b)=>a.price-b.price).reverse()[0]).price;
    let lowestPrice = (data.priceTable.sort((a,b)=>b.price-a.price).reverse()[0]).price;
</script>

<div class="container">
    <h2 class="title">Price per kWh</h2>
    <div class="grid">
        <div class="card">
            <div>
                <h3>Current price:</h3>
                <h3>( kWh )</h3>
            </div>
            <h2>{currentPrice} €</h2>
        </div>
        <div class="card">
            <div>
                <h3>Highest price:</h3>
                <h3>( kWh )</h3>
            </div>
            <h2>{highestPrice} €</h2>
        </div>
        <div class="card">
            <div>
                <h3>Lowest price:</h3>
                <h3>( kWh )</h3>
            </div>
            <h2>{lowestPrice} €</h2>
        </div>
        <div class="card">
            <div>
                <h3>Lowest price:</h3>
                <h3>( kWh )</h3>
            </div>
            <h2>{lowestPrice} €</h2>
        </div>
    </div>
</div>
<div class="container">
    <h2 class="title">Usage</h2>
    <div class="grid">
        <div class="card">
            <div>
                <h3>Air Condition:</h3>
                <h3>( 1 hour )</h3>
            </div>
            <h2>{getAc(currentPrice).low} - {getAc(currentPrice).high} €</h2>
        </div>
        <div class="card">
            <div>
                <h3>Shower:</h3>
                <h3>( 10 min )</h3>
            </div>
            <h2>{getShower(currentPrice).low} {getShower(currentPrice).high}€</h2>
        </div>
        <div class="card">
            <h3>Dishwasher:</h3>
            <h2>{getDishwasher(currentPrice).low}- {getDishwasher(currentPrice).high} €</h2>
        </div>
        <div class="card">
            <h3>Wash & dry</h3>
            <h2>{getWasherDryer(currentPrice).low}- {getWasherDryer(currentPrice).high} €</h2>
        </div>
    </div>
</div>


<style lang="scss">

  .title {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  .grid {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    margin-bottom: 1rem;
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

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

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
