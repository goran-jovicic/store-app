<template>
  <div>
    <ul>
      <li v-for="(customer,index) in customers" :key="index">
        {{ `${customer.id} ${customer.fullName} ${customer.email}` }}
      <button @click="handleRemove(customer)">Remove Customer</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { customerService } from "@/services/CustomerService"

export default {
  data () {
    return {
      customers: customerService.list(),
    }
  },

  methods: {
    handleRemove (customer) {
      this.$emit(customerService.remove(customer))
    }
  }
}
</script>

<style>
li {
  list-style: none;
}
</style>
