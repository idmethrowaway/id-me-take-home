<script lang="ts">
	export let date: string;

	const dateOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	$: formattedDate = new Date(date).toLocaleDateString('en-US', dateOptions);
</script>

<span>{formattedDate}</span>
