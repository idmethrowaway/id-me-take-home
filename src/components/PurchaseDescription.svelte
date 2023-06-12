<script lang="ts">
	export let description: string;
</script>

<span class="purchase__description">{@html description}</span>

<style>
	.purchase__description {
		font-size: 14px;
		line-height: 21px;
		font-weight: 400;
		color: #272833;
	}
</style>
