<template>
   <div class="container w-full mx-auto pt-20">

        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <!--Console Content-->
              <router-view />
            <!--Divider-->
            <!--/ Console Content-->
        </div>
    </div>
</template>

<script>
export default {
  name: "Body",
};
</script>