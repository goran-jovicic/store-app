<template>
	<div>
		<ul>
			<li v-for="(product,index) in filteredArr" :key="index">
				{{ `${product.id} ${product.name} ${product.quantity}`}}
			</li>
		</ul>
		<input type="text" placeholder="Search.." v-model="term">
		<button class="btn btn-primary" type="submit">Search</button>
	</div>
</template>

<script>
import { productService } from '@/services/ProductService'

export default {
	data () {
		return {
			products : productService.list(),
			term : ""
		}
	},

	methods : {
	},

	computed : {
		filteredArr () {
			return this.products.filter(product => {
				return product.name.includes(this.term)
			})
		}
	}
}
</script>

<style>

</style>
