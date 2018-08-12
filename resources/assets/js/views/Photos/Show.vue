<template>
	<div class="photo__show">
		<div class="photo__row">
			<div class="photo__image">
				<div class="photo__box">
					<img :src="`/images/${photo.image}`" v-if="photo.image">
				</div>
			</div>
			<div class="photo__details">
				<div class="photo__details_inner">
					<small>Submitted by: {{photo.user.name}}</small>
					<h1 class="photo__title">{{photo.name}}</h1>
					<p class="photo__description">{{photo.description}}</p>
					<div v-if="authState.api_token && authState.user_id === photo.user_id">
						<router-link :to="`/photos/${photo.id}/edit`" class="btn btn-primary">
							Edit
						</router-link>
						<button class="btn btn__danger" @click="remove" :disabled="isRemoving">Delete</button>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	import Auth from '../../store/auth'
	import Flash from '../../helpers/flash'
	import { get, del } from '../../helpers/api'
	export default {
		data() {
			return {
				authState: Auth.state,
				isRemoving: false,
				photo: {
					user: {},
					
				}
			}
		},
		created() {
			get(`/api/photos/${this.$route.params.id}`)
				.then((res) => {
					this.photo = res.data.photo
				})
		},
		methods: {
			remove() {
				this.isRemoving = false
				del(`/api/photos/${this.$route.params.id}`)
					.then((res) => {
						if(res.data.deleted) {
							Flash.setSuccess('You have successfully deleted this photo!')
							this.$router.push('/')
						}
					})
			}
		}
	}
</script>
