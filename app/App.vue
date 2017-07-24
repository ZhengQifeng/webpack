
<template>
	<div class="msg">
		{{msg}}
		<tem1></tem1>
		<tem2></tem2>
	</div>
</template>

<style>
	.msg{
		color: #f00;
	}
</style>

<script>
import tem1 from './template/tem1.vue'
import tem2 from './template/tem2.vue'
	export default{
		data(){
			return {
				msg: 'hello2'
			}
		},
		components: {
			'tem1':tem1,
			'tem2':tem2,
		}
	}
</script>