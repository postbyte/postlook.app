<script>
	export let segment;
</script>

<style>

</style>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>photos</a></li>
		<li><a aria-current='{segment === "about" ? "page" : undefined}' href='upload'>collections</a></li>
	</ul>
</nav>
