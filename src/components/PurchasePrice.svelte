<script lang="ts">
	export let price: number;
</script>

<span class="purchase__price">
	${price}
</span>

<style>
	.purchase__price {
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
		color: #272833;
	}

	@media (max-width: 800px) {
		.purchase__price {
			margin-left: auto;
		}
	}
</style>
