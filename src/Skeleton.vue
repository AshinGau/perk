<template>
	<div id="PerkApp">
		<div id="PerkBody">
			<!--路由视图-->
			<router-view></router-view>
		</div>
		<!--底部菜单-->
		<div id="PerkMenu">
			<ul class="menu">
				<li>
					<a class="link-default" v-link="{ path: '/article/' + page }">
						<span class="icon icon-article">&nbsp;</span>
						<br/>
						<span class="text">文章</span>
					</a>
				</li>
				<li>
					<a class="link-default" v-link="{ name: 'message' }">
						<span class="icon icon-message">&nbsp;</span>
						<br/>
						<span class="text">消息</span>
					</a>
				</li>
				<li>
					<a class="link-default" v-link="{ name: 'user' }">
						<span class="icon icon-user">&nbsp;</span>
						<br/>
						<span class="text">个人中心</span>
					</a>
				</li>
			</ul>	
		</div>
	</div>
</template>

<script>
	export default{
		data: function(){
			return {
				page: (this.$route.params.page || $.cookie('page'))
			}
		}, 
		ready: function(){
			if(!$.cookie('page'))
				$.cookie('page', this.$route.params.page);
			window._page = (this.$route.params.page || $.cookie('page'));
			//窗口向上滑动的时候，影藏menu
			var $PerkMenu = $('#PerkMenu');
			window.$win = $(window);
			window.previousScrollTop = window.$win.scrollTop();
			window.$win.scroll(function(){
				var top = window.$win.scrollTop(),
					op = top - window.previousScrollTop;
				if(top == 0 || op < -80){
					$PerkMenu.removeClass('down');
					window.previousScrollTop = top;
				}else if(op > 80){
					$PerkMenu.addClass('down');
					window.previousScrollTop = top;
				}
			});
		}
	}
</script>