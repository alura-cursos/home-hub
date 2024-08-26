<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p>
			For a guide and recipes on how to configure / customize this project,<br />
			check out the
			<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
		</p>
		<h3>Installed CLI Plugins</h3>
		<ul>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
					target="_blank"
					rel="noopener"
					>babel</a
				>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
					target="_blank"
					rel="noopener"
					>eslint</a
				>
			</li>
		</ul>
		<h3>Essential Links</h3>
		<ul>
			<li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
			<li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
			<li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
			<li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
		</ul>
		<h3>Ecosystem</h3>
		<ul>
			<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
			<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
			<li>
				<a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener"
					>vue-devtools</a
				>
			</li>
			<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
			<li>
				<a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"
					>awesome-vue</a
				>
			</li>
		</ul>
	</div>
	<Parcel
		v-on:parcelMounted="parcelMounted()"
		v-on:parcelUpdated="parcelUpdated()"
		:config="parcelConfig"
		:mountParcel="mountParcel"
		:wrapWith="wrapWith"
		:wrapClass="wrapClass"
		:wrapStyle="wrapStyle"
		:parcelProps="getParcelProps()"
	/>
</template>

<script>
/* eslint-disable */
import Parcel from 'single-spa-vue/parcel';

import { mountRootParcel } from 'single-spa';

export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	components: {
		Parcel,
	},
	data() {
		return {
			parcelConfig: System.import('@home-hub/react-parcel').then((ns) => ns.Widget),
			wrapWith: 'div',
			mountParcel: mountRootParcel,
			wrapStyle: {
				outline: '1px solid blue',
				width: '40px',
				height: '40px',
				backgroundColor: 'blue',
			},
		};
	},
	methods: {
		getParcelProps() {
			return {
				message: 'Hello World',
			};
		},
		parcelMounted() {
			console.log('parcel mounted');
		},
		parcelUpdated() {
			console.log('parcel updated');
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
