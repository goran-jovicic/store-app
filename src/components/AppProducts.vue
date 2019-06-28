<template>
	<div>
		<ul>
			<li v-for="(product,index) in filteredArr" :key="index">
				{{ `${product.name} currently stocked : ${product.quantity}`}}
				<button @click="incrementProduct(product)">+</button>
				<button @click="decrementProduct(product)">-</button>
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
		incrementProduct (product) {
			productService.increment(product)
		},

		decrementProduct (product) {
			productService.decrement(product)
		}
	},

	computed : {
		filteredArr () {
			return this.products.filter(product => {
				return product.name.toLowerCase().includes(this.term.toLowerCase())
			})
		}
	}
}
</script>

<style>

</style>
