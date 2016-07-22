<template>
	<div :style="{ 'textAlign': 'center', height: '2000px' , 'paddingTop': '200px' }">{{ msg }}</div>
</template>

<script>
	export default{
		data: function(){
			return {
				msg: '文章内容'
			}
		}
	}
</script>