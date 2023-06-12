<script lang="ts">
	import PurchaseName from './PurchaseName.svelte';
	import PurchaseLocation from './PurchaseLocation.svelte';
	import PurchaseDate from './PurchaseDate.svelte';
	import PurchaseCategory from './PurchaseCategory.svelte';
	import PurchaseDescription from './PurchaseDescription.svelte';
	import PurchasePrice from './PurchasePrice.svelte';
	import PurchaseAction from './PurchaseAction.svelte';

	export let purchases: {
		name: string;
		location: string;
		purchaseDate: string;
		category: string;
		description: string;
		price: number;
	}[];

	export let onClick: () => void;
</script>

<table>
	<thead>
		<tr>
			<th style="padding-left: 60px">Name</th>
			<th>Location</th>
			<th>Purchase Date</th>
			<th>Category</th>
			<th>Description</th>
			<th>Price</th>
			<th style="display: none">Actions</th>
		</tr>
	</thead>
	{#each purchases as purchase}
		<tr>
			<td style="padding-left: 60px"><PurchaseName name={purchase.name} /></td>
			<td><PurchaseLocation location={purchase.location} alt={purchase.name} /></td>
			<td><PurchaseDate date={purchase.purchaseDate} /></td>
			<td><PurchaseCategory category={purchase.category} /></td>
			<td><PurchaseDescription description={purchase.description} /></td>
			<td><PurchasePrice price={purchase.price} /></td>
			<td><PurchaseAction {onClick} /></td>
		</tr>
	{/each}
</table>

<style>
	table {
		border-collapse: collapse;
		text-align: left;
		width: 100%;
		border: 1px solid #e7e7ed;
		border-radius: 4px;
	}
	table thead {
		border: 1px solid #e7e7ed;
	}
	table tr {
		background: white;
	}
	table th {
		padding: 10px 20px;
	}

	td,
	th {
		padding-left: 20px;
	}

	@media (max-width: 800px) {
		table {
			border-collapse: collapse;
			text-align: left;
			width: 100%;
			border: none;
		}

		table thead {
			left: -9999px;
			position: absolute;
			visibility: hidden;
		}
		table tr {
			border-bottom: 0;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			margin-bottom: 40px;
		}
	}

	td {
		padding: 10px 20px;
	}

	@media (max-width: 800px) {
		tr {
			border-bottom: 0;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			margin-bottom: 40px;
		}
		td {
			margin: 0 -1px -1px 0;
			padding-top: 35px;
			position: relative;
			width: 50%;
			border-left: 1px solid;
			border-right: 1px solid;
		}
		td:first-child {
			border-top: 1px solid;
			border-left: 1px solid;
			border-right: 1px solid;
			border-radius: 10px 10px 0 0;
		}

		td:last-child {
			border-bottom: 1px solid;
			border-left: 1px solid;
			border-right: 1px solid;
			border-radius: 0 0 10px 10px;
		}
	}
</style>
