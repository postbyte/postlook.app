<svelte:head>
	<title>Upload</title>
</svelte:head>

<h2>Upload</h2>

<form action="/.netlify/functions/add" method="POST">
  <label for="collection">Collection</label>
  <input id="collection" name="collection" type="text" />
  <label for="url">URL</label>
  <input id="url" name="url" type="url" />
  <label for="topic">Topic</label>
  <input id="topic" name="topic" type="text" />
  <label for="description">Description</label>
  <textarea id="description" name="description"></textarea>
  <button type="submit">Send Message</button>
</form>