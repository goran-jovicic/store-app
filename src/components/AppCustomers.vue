<template>
  <div>
    <ul>
      <li v-for="(customer,index) in customers" :key="index">
        {{ `${customer.id} ${customer.fullName} ${customer.email}` }}
      <button @click="handleRemove(customer)">Remove Customer</button>
      </li>
    </ul>
    <form @submit.prevent="handleAdd(newCustomer)">
      <div>
        <label for="fullName">Full Name : </label>
        <input type="text" id="fullName" v-model="newCustomer.fullName" required/>
      </div>
      <div>
        <label for="email">Email : </label>
        <input type="text" id="email" v-model="newCustomer.email" required/>
      </div>
      <div>
        <button type="submit">Add contact</button>
      </div>
    </form>
  </div>
</template>

<script>
import { customerService } from "@/services/CustomerService"

export default {
  data () {
    return {
      customers: customerService.list(),
      newCustomer: this.getDefault()
    }
  },

  methods: {
    handleRemove (customer) {
      customerService.remove(customer)
    },

    handleAdd (newCustomer){
      customerService.add(newCustomer)
      this.newCustomer = this.getDefault()
    },

    getDefault () {
      return {
        id : '',
        fullName : '',
        email : '',
        products: []
      }
    }
  }
}
</script>

<style>
li {
  list-style: none;
}
</style>
