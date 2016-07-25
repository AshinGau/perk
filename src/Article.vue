<template>
	<div id="PerkArticle">
		<div class="container">
			<h2 class="article-title">{{ article.title }}</h2>
			<div class="row">
				<span class="article-time text-primary">{{ article.time }}</span>&nbsp;&nbsp;
				<span class="article-author">{{ article.author }}</span>
			</div>	
			<div class="article-introduction">
				<span class="util-top"></span>
				<span>{{ article.introduction }}</span>
				<span class="util-bottom"></span>
			</div>
			<div class="article-img">
				<img :src="article.img" />
			</div>
			<div class="article-content">
				{{{ article.content }}}
			</div>
			<p class="article-toggle">
				<a href="#" @click.prevent="articleToggle">{{ articleOp }}</a>
			</p>
		</div>	
		<div class="row">
			<perk-comment></perk-comment>
		</div>
	</div>
</template>

<script>
	var demo_article_data =  {
		title: '你的口红一定很贵吧，为什么男朋友从来不送',
		time: '2016-07-22',
		author: '夏雨民',
		introduction: '优秀的男票都知道，怎样才是宠爱自己女朋友的最佳方式。',
		img: 'public/img/bg/article.jpg',
		content: '<p>我与父亲不相见已二年余了，我最不能忘记的是他的背影。</p>'
				+'<p>那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子。我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说：“事已如此，不必难过，好在天无绝人之路！”</p>'
				+'<p>回家变卖典质，父亲还了亏空；又借钱办了丧事。这些日子，家中光景很是惨澹，一半为了丧事，一半为了父亲赋闲。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。</p>'
				+'<p>到南京时，有朋友约去游逛，勾留了一日；第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖；颇踌躇了一会。其实我那年已二十岁，北京已来往过两三次，是没有什么要紧的了。他踌躇了一会，终于决定还是自己送我去。我再三劝他不必去；他只说：“不要紧，他们去不好！”</p>'
	};
	export default{
		data: function(){
			return {
				articleFolded: true,
				articleOp: '展开全文 >>',
				article: {}
			}
		},
		watch: {
			articleFolded: function(val){
				if(val){
					this.articleOp = '展开全文 >>';
					$('.article-content > p').each(function(index){
						if(index > 2)
							$(this).hide();
					});
				}else{
					this.articleOp = '收起全文 <<';
					$('.article-content > p').each(function(index){
						if(index > 2)
							$(this).show();
					});
				}
			}
		},
		methods: {
			articleToggle: function(event){
				this.articleFolded =! this.articleFolded;
			}
		},
		ready: function(){
			/*
			this.$http.post('#', {}).then(function(){
				//success
			}, function(){
				//error
			});
			*/
			this.$set('article', demo_article_data);
			this.$nextTick(function(){
				if(this.articleFolded){
					this.articleOp = '展开全文 >>';
					$('.article-content > p').each(function(index){
						if(index > 2)
							$(this).hide();
					});
				}
			});
		}
	}
</script>