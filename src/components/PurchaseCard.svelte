<script lang="ts">
	import PurchaseLocation from '../components/PurchaseLocation.svelte';
	import PurchaseName from '../components/PurchaseName.svelte';
	import PurchasePrice from '../components/PurchasePrice.svelte';
	import PurchaseDescription from '../components/PurchaseDescription.svelte';
	import PurchaseDate from '../components/PurchaseDate.svelte';

	export let purchase: {
		name: string;
		location: string;
		purchaseDate: string;
		category: string;
		description: string;
		price: number;
	};

	export let onClick: () => void;
</script>

<button class="card" on:click={() => onClick()}>
	<div class="card__row">
		<PurchaseLocation location={purchase.location} alt={purchase.name} />
		<PurchaseName name={purchase.name} />
		<PurchasePrice price={purchase.price} />
	</div>
	<div class="card__row">
		<PurchaseDescription description={purchase.description} />
	</div>
	<div class="card__row">
		<div class="card__group">
			<span style="font-weight: 600">Purchase Date</span>
			<PurchaseDate date={purchase.purchaseDate} />
		</div>
	</div>
</button>

<style>
	button {
		font-family: inherit; /* 1 */
		font-size: 100%; /* 1 */
		line-height: 1.15; /* 1 */
		margin: 0; /* 2 */
		overflow: visible;
		text-transform: none;
		background-color: transparent;
		width: 100%;
		height: 100%;
		text-align: left;
	}

	.card {
		margin-bottom: 9px;
		cursor: pointer;
	}

	.card:hover {
		background-color: #f5f5f5;
	}

	.card:last-child {
		margin-bottom: 0;
	}

	.card {
		border: solid 1px black;
		border-radius: 4px;
		padding: 16px 24px;
	}

	.card__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.card__row + .card__row {
		margin-top: 8px;
	}

	.card__group {
		display: flex;
		flex-direction: column;
	}
</style>
