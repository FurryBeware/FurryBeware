<template>
	<q-page>
		<q-input v-model="text" rounded dense outlined input-class="text-left" class="q-mt-md" label="Search for Bewares"
			:loading="loadingState" debounce="300">
			<template #append>
				<q-icon v-if="text === ''" name="mdi-magnify" />
				<q-icon v-else name="mdi-close-circle-outline" class="cursor-pointer" @click="text = ''" />
			</template>
		</q-input>

		<template v-for="index in 20" :key="index">
			<q-card bordered class="my-card q-my-md">
				<q-card-section>
					<div class="text-h6">
						Lorem Ipsum
					</div>
					<div class="text-subtitle2">
						by John Doe
					</div>
				</q-card-section>

				<q-separator inset />

				<q-card-section>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat magni iusto illum dolores inventore iure ipsa
					adipisci quibusdam tenetur. Minus iste numquam quis quibusdam eveniet neque dolores ad fuga repudiandae.
				</q-card-section>

				<q-separator inset />

				<q-card-actions>
					<q-btn flat>
						Read More
					</q-btn>
				</q-card-actions>
			</q-card>
		</template>
	</q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const text = ref('');
const loadingState = ref(false);
</script>
