<script lang="ts">
	export let description: string;
</script>

<!-- In a production environment, this HTML should be sanitized prior to being rendered -->
<span class="purchase__description">{@html description}</span>

<style>
	.purchase__description {
		font-size: 14px;
		line-height: 21px;
		font-weight: 400;
		color: #272833;
	}
</style>
