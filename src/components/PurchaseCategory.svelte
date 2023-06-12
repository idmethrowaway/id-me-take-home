<script lang="ts">
	export let category: string;

	const colors: Record<number, string> = {
		1: '#000000',
		2: '#118632',
		3: '#2E5AAC',
		4: '#D94130'
	};

	$: color = colors[Math.floor(Math.random() * Object.keys(colors).length) + 1];
</script>

<div class="purchase__category" style:color style:border-color={color}>{category}</div>

<style>
	.purchase__category {
		font-weight: 600;
		font-size: 12px;
		color: #000000;
		line-height: 18px;
		text-transform: capitalize;
		border: solid 1px black;
		border-radius: 2px;
		padding: 3px 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
