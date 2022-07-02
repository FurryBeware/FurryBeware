<template>
	<q-layout view="hHh LpR fFf">
		<q-header elevated class="bg-primary text-white" height-hint="98">
			<q-toolbar>
				<q-toolbar-title>
					<q-avatar>
						<q-img src="icons/icon-256x256.png" />
					</q-avatar>
					FurryBeware
				</q-toolbar-title>
				<q-tabs align="left">
					<q-route-tab to="/login" label="Login" />
					<q-route-tab to="/signup" label="Sign Up" />
				</q-tabs>

				<q-btn round @click="toggleDark()">
					<transition enter-active-class="animated rotateIn" leave-active-class="animated rotateOut" mode="out-in">
						<q-icon v-if="checkDark()" name="mdi-weather-sunny" />
						<q-icon v-else name="mdi-weather-night" />
					</transition>
				</q-btn>
			</q-toolbar>
		</q-header>

		<q-drawer :model-value="true" show-if-above side="left">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae sunt fuga, repellat atque perspiciatis maiores.
			Maxime, atque accusantium est laborum temporibus debitis fuga, qui magni ad sit aliquam facere a?
		</q-drawer>

		<q-page-container class="q-mx-xl">
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';

const q = useQuasar();

function toggleDark(): void {
	q.dark.toggle();
}

function checkDark(): boolean {
	return q.dark.isActive;
}
</script>
