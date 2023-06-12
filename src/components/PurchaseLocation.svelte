<script lang="ts">
	export let location: string;
	export let alt: string;

	let hasImage = true;

	const notFound = () => {
		hasImage = false;
	};
</script>

{#if !hasImage}
	<div class="not__found"><abbr title={alt}>{alt.charAt(0).toUpperCase()}</abbr></div>
{:else}
	<img on:error={notFound} class="purchase__location" src={location} {alt} />
{/if}

<style>
	.purchase__location {
		width: 40px;
		height: 40px;
		object-fit: cover;
		object-position: center;
		border-radius: 50%;
		margin-right: 10px;
	}

	.not__found {
		width: 40px;
		height: 40px;
		background-color: grey;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		color: white;
		opacity: 0.4;
		margin-right: 10px;
	}
</style>
