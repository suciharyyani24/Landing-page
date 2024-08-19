<template>
    <section class="features py-20 bg-gray-50">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(feature, index) in features" :key="index" @click="selectFeature(index)"
                class="feature text-center p-8 bg-white rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
                :class="{ 'bg-blue-500 text-white': selectedFeature === index }">
                <div class="mb-4">
                    <svg v-if="!selectedFeature" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" class="w-12 h-12 mx-auto text-blue-500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M12 6h.01M12 12h.01M12 18h.01M16 8h.01M8 8h.01M8 16h.01M16 16h.01" />
                    </svg>
                </div>
                <h2 class="text-2xl font-bold mb-4">{{ feature.title }}</h2>
                <p v-if="selectedFeature === index">{{ feature.details }}</p>
                <p v-else class="text-gray-600">{{ feature.summary }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FeaturesSection',
    data() {
        return {
            features: [
                {
                    title: 'Fitur 1',
                    summary: 'Deskripsi singkat fitur 1.',
                    details: 'Penjelasan lebih lengkap mengenai fitur 1.'
                },
                {
                    title: 'Fitur 2',
                    summary: 'Deskripsi singkat fitur 2.',
                    details: 'Penjelasan lebih lengkap mengenai fitur 2.'
                },
                {
                    title: 'Fitur 3',
                    summary: 'Deskripsi singkat fitur 3.',
                    details: 'Penjelasan lebih lengkap mengenai fitur 3.'
                }
            ],
            selectedFeature: null,
        };
    },
    methods: {
        selectFeature(index) {
            this.selectedFeature = this.selectedFeature === index ? null : index;
        },
    },
};
</script>
