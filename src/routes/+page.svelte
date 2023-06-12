<script>
	import purchases from './data.json';
	import MediaQuery from '../components/MediaQuery.svelte';
	import PurchaseTable from '../components/PurchaseTable.svelte';
	import PurchaseCard from '../components/PurchaseCard.svelte';

	const onClick = () => {
		console.log('clicked');
	};
</script>

<main>
	<header>
		<h1 class="title">Purchases</h1>
	</header>
	<MediaQuery query="(max-width: 800px)" let:matches>
		{#if matches}
			{#each purchases as purchase}
				<PurchaseCard {purchase} {onClick} />
			{/each}
		{:else}
			<PurchaseTable {purchases} {onClick} />
		{/if}
	</MediaQuery>
</main>

<style>
	main {
		padding: 80px;
	}

	.title {
		font-weight: 700;
		font-size: 40px;
		line-height: 50px;
		color: #16145a;
	}

	@media (max-width: 800px) {
		main {
			padding: 0;
		}
	}
</style>
