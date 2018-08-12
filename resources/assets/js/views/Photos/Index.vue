<template>
	<div class="photo__list">
		<div class="photo__item" v-for="photo in photos">
			<router-link class="photo__inner" :to="`/photos/${photo.id}`">
				<img :src="`/images/${photo.image}`" v-if="photo.image">
				<p class="photo__name">{{photo.name}}</p>
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
	import { get } from '../../helpers/api'
	export default {
		data() {
			return {
				photos: []
			}
		},
		created() {
			get('/api/photos')
				.then((res) => {
					this.photos = res.data.photos
				})
		}
	}
</script>
