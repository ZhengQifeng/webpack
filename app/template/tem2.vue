<template>
	<div id="app1">
	    <el-button @click="visible = true">按钮</el-button>
	    <el-dialog v-model="visible" title="Hello world">
	      <p>欢迎使用 Element</p>
	    </el-dialog>
  	</div>
</template>

<script>
	export default{
		data: function() {
        	return { visible: false }
      	}
	}
</script>