<style>
img {
  display: block;
  image-orientation: from-image;
}
</style>

<svelte:head>
	<title>Postlook</title>
</svelte:head>

<script>
  async function displayCollections() {

  }

  displayCollections()
</script>

<ul grid columns="4" gap="8">
  <li cell><h4>Collection</h4></li>
  <li cell><img alt="photo" src="https://s3.us-east-2.wasabisys.com/postlook/DSC01027.JPG"></li>
  <li cell><img alt="photo" src="https://s3.us-east-2.wasabisys.com/postlook/DSC01028.JPG"></li>
  <li cell><img alt="photo" src="https://s3.us-east-2.wasabisys.com/postlook/DSC01030.JPG"></li>
  <li cell><img alt="photo" src="https://s3.us-east-2.wasabisys.com/postlook/DSC01031.JPG"></li>
  <li cell><img alt="photo" src="https://s3.us-east-2.wasabisys.com/postlook/DSC01032.JPG"></li>
  <li cell><img alt="photo" src="https://s3.us-east-2.wasabisys.com/postlook/DSC01033.JPG"></li>
</ul>