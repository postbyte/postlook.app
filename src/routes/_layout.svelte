<script>
	import Header from '../components/Header.svelte';
	import Filter from '../components/Filter.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
</style>

<ul grid gap="8" id="postlook" p="8">
	<Header {segment}/>

	<Filter/>

	<main>
		<slot></slot>
	</main>

	<Footer/>
</ul>