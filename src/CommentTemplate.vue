<template>
	<ul class="comment-list">
		<li v-for="(cindex, comment) in comments">
			<div class="comment-portrait"><img :src="comment.portrait"/></div>
			<div class="comment-box">
				<div class="row">
					<span class="text-gray">{{ comment.username }}</span>
					<span class="pull-right">
						<span class="text-gray">{{ comment.likes }}</span>
						<span class="icon icon-like"></span>
						<span>&nbsp;</span>
						<span class="text-gray">{{ comment.cnt }}</span>
						<span class="icon icon-comment-cnt"></span>
					</span>
				</div>
				<div class="comment-content"><a class="link-default" href="#" @click.prevent="reply1(cindex)">{{ comment.content }}</a></div>
				<ul class="comment-reply-list">
					<li v-for="(rindex, reply) in comment.replys">
						<div class="text-gray">{{ reply.username }}:</div>
						<div class="reply-content"><a class="link-default" href="#" @click.prevent="reply2(cindex, rindex)">{{ reply.content }}</a></div>
					</li>
				</ul>
			</div>
		</li>
	</ul>
</template>

<script>
	var demo_comments = [
		{
			portrait: 'public/img/bg/portrait.png',
			username: '娄佩良',
			likes: 99,
			cnt: 12,
			content: '感人肺腑，发自心声',
			replys: [
				{ username: '高鑫', content: '没事别装逼' },
				{ username: '夏雨民', content: '有点闷骚' }
			]
		},
		{
			portrait: 'public/img/bg/portrait.png',
			username: '夏雨民',
			likes: 99,
			cnt: 12,
			content: '楼上的老湿好淫好湿',
			replys: [
				{ username: '高鑫', content: '没事别装逼' },
				{ username: '娄佩良', content: '瞎鸡巴乱说' }
			]
		}
	];
	//评论、回复，全局对象
	window._perk_reply = {
		heading: '文章标题',
		placeholder: '添加评论',
		content: '',
		userId: ''
		//一系列的认证信息，在这儿添加
	};
	export default{
		data: function(){
			return {
				comments: demo_comments
			}
		},
		methods: {
			reply1: function(cindex){
				window._perk_reply.heading = this.comments[cindex].content;
				window._perk_reply.placeholder = '回复' + this.comments[cindex].username;
				this.$route.router.go({ path: '/article/reply' });
			},
			reply2: function(cindex, rindex){
				window._perk_reply.heading = this.comments[cindex].replys[rindex].content;
				window._perk_reply.placeholder = '回复' + this.comments[cindex].replys[rindex].username;
				this.$route.router.go({ path: '/article/reply' });
			}
		},
		ready: function(){
		}
	}
</script>