<script lang="ts">
	export let onClick: () => void;
</script>

<button on:click={() => onClick()}><span>&vellip;</span></button>

<style>
	button {
		cursor: pointer;
		position: relative;
		background-color: transparent;
		border: none;
		width: auto;
		height: auto;
	}
</style>
