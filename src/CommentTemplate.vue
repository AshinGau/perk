<template>
	<ul class="comment-list">
		<li v-for="(cindex, comment) in comments">
			<div class="comment-portrait">
				<img v-if="comment.user.profile.head_img" :src="comment.user.profile.head_img"/>
				<img v-else :src.literal="public/img/bg/portrait.png"/>
			</div>
			<div class="comment-box">
				<div class="row">
					<span class="text-gray">{{ comment.user.profile.nick_name }}</span>
					<span class="pull-right">
						<span class="text-gray">{{ comment.n_likes }}</span>
						<span class="icon icon-like"></span>
						<span>&nbsp;</span>
						<span class="text-gray">{{ comment.n_replies }}</span>
						<span class="icon icon-comment-cnt"></span>
					</span>
				</div>
				<div class="comment-content"><a class="link-default" href="#" @click.prevent="reply1(cindex)">{{ comment.content }}</a></div>
				<div class="comment-date">{{ parseDate(comment.pub_date) }}</div>
				<ul class="comment-reply-list">
					<li v-for="(rindex, reply) in comment.replys">
						<div class="text-gray"><i>{{ reply.user.profile.nick_name }}</i> 回复 <i>{{ reply.reply_comment.user.profile.nick_name }}</i>:</div>
						<div class="reply-content"><a class="link-default" href="#" @click.prevent="reply2(cindex, rindex)">{{ reply.content }}</a></div>
						<div class="comment-date">{{ parseDate(reply.pub_date) }}</div>
					</li>
				</ul>
			</div>
		</li>
	</ul>
</template>

<script>
	//评论、回复，全局对象
	window._perk_reply = {
		heading: '文章标题',
		placeholder: '添加评论',
		content: '',
		userId: ''
		//一系列的认证信息，在这儿添加
	};
	export default{
		props: ['comments'],
		methods: {
			parseDate: function(dt){
				var now = new Date(),
					days = (now - dt)/24/60/60/1000,
					str;
				if(days < 1/24){
					str = Math.ceil(days*24*60)+'分钟前';
				}else if(days < 1){
					str = Math.ceil(days*24)+'小时前';
				}else if(days < 2){
					str = "昨天";
				}else{
					var month = dt.getMonth() + 1,
						day = dt.getDate();
					if(month < 10)
						month = '0' + month.toString();
					if(day < 10)
						day = '0' + day.toString();
					str = month + '/' + day;				
				}
				return str;
			},
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
		}
	}
</script>