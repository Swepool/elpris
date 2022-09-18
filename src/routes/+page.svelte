<script>
    import Lightning from "$lib/icons/Lightning.svelte";
    import {
        getAc,
        getCarCharge,
        getDishwasher, getDryer,
        getMiner,
        getShower,
    } from "../utils/index.js";
    import Car from "$lib/icons/Car.svelte";
    import Bitcoin from "$lib/icons/Bitcoin.svelte";
    import Snowflake from "$lib/icons/Snowflake.svelte";
    import Drop from "$lib/icons/Drop.svelte";
    import Washer from "$lib/icons/Washer.svelte";
    import Dish from "$lib/icons/Dish.svelte";

    export const ssr = true
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
                <div class="card-title">
                    <Lightning color="#FFD129"/>
                    <h3>Current price</h3>
                </div>
                <h4>( 1 kWh )</h4>
            </div>
            <h2>{currentPrice} €</h2>
        </div>
        <div class="card">
            <div>
                <div class="card-title">
                    <Lightning color="#FF4B78"/>
                    <h3>Highest price</h3>
                </div>
                <h4>( 1 kWh )</h4>
            </div>
            <h2>{highestPrice} €</h2>
        </div>
        <div class="card">
            <div>
                <div class="card-title">
                    <Lightning color="#2DFF73"/>
                    <h3>Lowest price</h3>
                </div>
                <h4>( 1 kWh )</h4>
            </div>
            <h2>{lowestPrice} €</h2>
        </div>
        <div class="card">
            <div>
                <h3>Overview:</h3>
            </div>
            <div>
                <div></div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <h2 class="title">Cost examples</h2>
    <div class="grid">
        <div class="card">
            <div>
                <div class="card-title">
                    <Snowflake/>
                    <h3>Air Condition</h3>
                </div>
                <h4>( 1H )</h4>
            </div>
            <h2>{getAc(currentPrice).low} - {getAc(currentPrice).high} €</h2>
        </div>
        <div class="card">
            <div>
                <div class="card-title">
                    <Drop/>
                    <h3>Shower</h3>
                </div>

                <h4>( 10M )</h4>
            </div>
            <h2>{getShower(currentPrice).low} - {getShower(currentPrice).high} €</h2>
        </div>
        <div class="card">
            <div>
                <div class="card-title">
                    <Dish/>
                    <h3>Dishwasher</h3>
                </div>
                <h4>( One run )</h4>
            </div>
            <h2>{getDishwasher(currentPrice).low} - {getDishwasher(currentPrice).high} €</h2>
        </div>
        <div class="card">
            <div>
                <div class="card-title">
                    <Washer/>
                    <h3>Dryer</h3>
                </div>
                <h4>( One run )</h4>
            </div>
            <h2>{getDryer(currentPrice).low} - {getDryer(currentPrice).high} €</h2>
        </div>
        <div class="card">
            <div>
                <div class="card-title">
                    <Car/>
                    <h3>Charge car</h3>
                </div>
                <h4>( 0 - 100% )</h4>
            </div>
            <h2>{getCarCharge(currentPrice).low} - {getCarCharge(currentPrice).high} €</h2>
        </div>
        <div class="card">
            <div>
                <div class="card-title">
                    <Bitcoin/>
                    <h3>Bitcoin miner</h3>
                </div>
                <h4>( S19 1H )</h4>
            </div>
            <h2>{getMiner(currentPrice).low} - {getMiner(currentPrice).high} €</h2>
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

    .card-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    h3, h4 {
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
