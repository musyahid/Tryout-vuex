<template>
     <div class="w-full p-3">
        <div class="vld-parent">
          <loading :active.sync="isLoading" 
          :can-cancel="true" 
          :on-cancel="onCancel"
          :is-full-page="fullPage"></loading>
        </div>
        <div>
            <button
              class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style="transition: all .15s ease"
              v-on:click="toggleModal()"
            >
              ADD PRODUCT IN
            </button>

            <button class="bg-blue-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"

              type="button"
              style="transition: all .15s ease"
              v-on:click="downloadFile()"
            >
              DOWNLOAD REPORT PRODUCT IN
            </button>

          <toast position="ne"></toast>

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
                <div class="mb-4">
                  <label
                    class="text-left block text-gray-700 text-base font-bold mb-2"
                    for="productname"
                    >Product Name</label
                  >
                  <div class="relative">
                    <select v-model="product_name" 
                      class="shadow appearance-none w-full bg-white border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state">
                      <option v-for="(product, i) in products" :key="i" :value="product.id" >{{product.id}} - {{product.name}}</option>
                    </select>     
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Total -->
                <div class="mb-4">
                  <label
                    class="text-left block text-gray-700 text-base font-bold mb-2"
                    for="total"
                    >Total</label
                  >
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="total"
                    type="text" v-model="total"
                  />
                </div>

                <div class="flex items-center justify-between">
                  <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Submit">
                </div>
                <div class="mt-4">
                  <button
                    class="text-blue-500 text-center font-bold"
                    style="transition: all .15s ease"
                    v-on:click="toggleModalClose()"
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

          <div
          v-if="showModalUpdate"
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
                <div class="mb-4">
                  <label
                    class="text-left block text-gray-700 text-base font-bold mb-2"
                    for="productname"
                    >Product Name</label
                  >
                  <div class="relative">
                    <select v-model="product_name" 
                      class="shadow appearance-none w-full bg-white border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state">
                      <option v-for="(product, i) in products" :key="i" :value="product.id" >{{product.id}} - {{product.name}}</option>
                    </select>     
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Total -->
                <div class="mb-4">
                  <label
                    class="text-left block text-gray-700 text-base font-bold mb-2"
                    for="total"
                    >Total</label
                  >
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="total"
                    type="text" v-model="totalUpdate" 
                  />
                </div>
      
                <div class="flex items-center justify-between">
                  <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Submit">
                </div>
                <div class="mt-4">
                  <button
                    class="text-blue-500 text-center font-bold"
                    style="transition: all .15s ease"
                    v-on:click="toggleModalClose()"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!-- b -->
          </div>
          <div v-if="showModalUpdate" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
          <!--Table Card-->
      <div class="bg-white border rounded shadow">
              <div class="border-b p-3">
                  <h5 class="font-bold uppercase text-gray-600">Table product out</h5>
              </div>
              <div class="p-5">
                  <table class="w-full p-5 text-gray-700">
                      <thead>
                          <tr>
                              <th class="text-center text-blue-900">DATE</th>
                              <th class="text-centertext-blue-900">IMAGE</th>
                              <th class="text-center text-blue-900">TOTAL</th>
                              <th class="text-center text-blue-900">PRODUCT NAME</th>
                              <th class="text-center text-blue-900">ACTION</th>
                          </tr>
                      </thead>

                      <tbody> 
                          <tr v-for="(product, i) in productsIn" :key="i">
                              <td class="text-center">{{product.date | moment("dddd, MMMM Do YYYY") }}</td>
                              <td class="text-center"><img width="100"  v-bind:src="product.Product['photo_url']" alt="Sunset in the mountains"></td>
                              <td > <p class="bg-teal-500 text-white text-center" >{{product.total}}</p> </td>
                              <td class="text-center">{{product.Product['name']}}</td>
                              <td class="text-center"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="deleteProduct(product.id)">Delete</button> || <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="toggleModalUpdate(product.id)">EDIT</button>
                              </td>
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { Toast, ADD_TOAST_MESSAGE } from 'vuex-toast'

import 'vuex-toast/dist/vuex-toast.css'

export default {

  components: {
    Toast,
    Loading
  },

  name: "ProductInList",
    data() {
      return {
        product_name: "",
        totalUpdate: [],
        showModal: false,
        showModalUpdate: false,
        isLoading: false,
        fullPage: true
      };
    },
  created() {
    this.getProduct();
    this.isLoading = true;
    setTimeout(() => {
      this.getProductIn();
      this.isLoading = false
    },1000)

  },

  methods: {
    deleteProduct(id) {
      let Confirm = confirm("Are you sure delete data?");
      if(Confirm) {
          this.deleteProductIn(id)
          this.sendNotification("Data Berhasil Dihapus");
      }
    },
    downloadFile() {
      this.downloadInFile()
    },
    toggleModal() {
        this.showModal = true;
    },
    toggleModalUpdate(id) {
        this.getDetailProductIn(id)
        // this.totalUpdate.push(this.detailProductIn.total)
        this.showModalUpdate = true;
    },
    toggleModalClose() {
        this.showModal = false;
      },
      checkForm(e) {
      let error = [];
      if (this.product_name === "") error.push("Product name Required");
      if (this.total === "") error.push("total Required");
      console.log({ error });
      if (error.length > 0) {
        this.alert = error;
      } else {
        const payload = {
          product_id: this.product_name,
          total: this.total
        };
        this.productInAction(payload);
        this.showModal = false;
        this.sendNotification("Data Berhasil Ditambah");
      
      }
      e.preventDefault();
      return false;
    },
    ...mapActions(["getProductIn", "downloadInFile", "getDetailProductIn", "getProduct", "productInAction", "deleteProductIn"]),
        ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    }),
    sendNotification(text) {
      this.addToast({
        text,
        type: 'success',
        dismissAfter: 2000
      })
    }
  },
  computed: {
    ...mapState(["productsIn", "products", "detailProductIn"])
  },
};
</script>