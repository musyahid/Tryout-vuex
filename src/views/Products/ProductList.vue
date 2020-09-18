<template>
     <div class="w-full p-3">
    <button
      class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      type="button"
      style="transition: all .15s ease"
      v-on:click="toggleModal()"
    >
      ADD PRODUCT
    </button>
        <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <!-- a -->
          <div class="mx-auto">
        <div class="w-full max-w-xs mx-auto mt-8">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="checkForm">
            <h1 class="text-gray-700 font-bold mt-4 mb-8 text-xl">
              Add Product IN
            </h1>

            <!-- Product Name -->
                        <!-- Total -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="total"
                >Product name</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="total"
                type="text" v-model="product_name"
              />
            </div>

            <!-- stok -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="stock"
                >Stock</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="stock"
                type="text" v-model="stock"
              />
            </div>

            <!-- price -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="price"
                >Price</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="text" v-model="price"
              />
            </div>

                        <!-- price -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="price"
                >Image</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="sdsd" v-model="price"
              />
            </div>

            <div class="flex items-center justify-between">
               <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Submit">
            </div>
            <div class="mt-4">
              <button
                class="text-blue-500 text-center font-bold"
                style="transition: all .15s ease"
                v-on:click="toggleModal()"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- b -->
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        <!--Table Card-->
        <div class="bg-white border rounded shadow">
            <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600">Table product</h5>
            </div>
            <div class="p-5">
                <table class="w-full p-5 text-gray-700">
                    <thead>
                        <tr>
                            <th class="text-left text-blue-900">PRODUCT NAME</th>
                            <th class="text-left text-blue-900">STOCK</th>
                            <th class="text-left text-blue-900">PRICE</th>
                            <th class="text-left text-blue-900">SUPPLIER</th>
                            <th class="text-left text-blue-900">ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(product, i) in products" :key="i">
                            <td>{{product.name}}</td>
                            <td>{{product.stock}}</td>
                            <td>{{product.price}}</td>
                            <td>{{product.supplier['full_name']}}</td>
                            <a href=""><router-link
                            :to="{name:'productDetail',params:{id:product.id}}"
                            class="hover:text-red-500"
                            >DETAIL |</router-link><router-link
                            :to="{name:'productDetail',params:{id:product.id}}"
                            class="hover:text-red-500"
                            >EDIT|</router-link><router-link
                            :to="{name:'productDetail',params:{id:product.id}}"
                            class="hover:text-red-500"
                            >DELETE </router-link></a>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--/table Card-->
    </div>
</template>



<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ProductList",
    data() {
      return {
        product_name: "",
        stock: "",
        price: "",
        image: "",
        userId: "",
        showModal: false,
      };
    },
  created() {

    this.getProduct();
  },

  methods: {
      toggleModal() {
        this.showModal = !this.showModal;
      },
      checkForm(e) {
      let error = [];
      if (this.product_name === "") error.push("Product name Required");
      if (this.stock === "") error.push("stock Required");
      if (this.price === "") error.push("price Required");
      console.log({ error });
      if (error.length > 0) {
        this.alert = error;
      } else {
        const payload = {
          name: this.product_name,
          stock: this.stock,
          price: this.price,
        };
        console.log(payload)
        this.productInAction(payload);
      }
      e.preventDefault();
      return false;
    },
    ...mapActions(["getProduct", "productInAction"]),
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>