<template>
	<!--回复和评论同用一个页面-->
	<div id="PerkReply" class="container">
		<!--评论的原内容，如果是发表新评论，为文章的标题-->
		<div class="reply-heading">{{ heading }}</div>
		<div class="reply-content form-group">
			<textarea id="PerkReplyContent" class="form-control" :placeholder="placeholder" v-model="content"></textarea>
		</div>
		<div class="form-group">
			<button type="button" class="btn btn-primary btn-nano btn-block" @click="submitContent">提交</button>
		</div>
	</div>
</template>

<script>
	export default{
		data: function(){
			return window._perk_reply;
		},
		methods: {
			submitContent: function(){
				//提交事件
				console.log(this.content);
			}
		}
	}
</script>