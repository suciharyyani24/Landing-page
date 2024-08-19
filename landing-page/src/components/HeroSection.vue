<template>
    <section class="hero bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-20">
        <h1 class="text-5xl font-bold mb-4 animate-bounce">Produk Hebat</h1>
        <p class="text-xl mb-6">Tingkatkan produktivitas Anda dengan produk kami.</p>
        <button @click="handleClick"
            class="bg-white text-blue-500 hover:bg-blue-100 px-6 py-3 rounded-lg shadow-lg font-semibold transition duration-300 ease-in-out">
            Pelajari Lebih Lanjut
        </button>
    </section>
</template>

<script>
export default {
    name: 'HeroSection',
    methods: {
        handleClick() {
            alert('Tombol telah diklik!');
        },
    },
};
</script>
