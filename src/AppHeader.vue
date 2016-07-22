<template>
	<div id="PerkApp">
		<div id="AppHeader">
			<div class="perk-log">
				<img class="perk-log-img" src="http://perksummit.com/nova/wp-content/uploads/2016/04/logo.png" alt="破壳峰会" title="破壳峰会" />
				<span class="perk-log-text">一个有情怀的聚会</span>
			</div>
			<ul class="menu perk-menu">
				<li>
					<a v-link="{ path: '/article' }">文章</a>
				</li>
				<li>
					<a v-link="{ path: '/message' }">消息</a>
				</li>
				<li>
					<a v-link="{ path: '/user' }">个人中心</a>
				</li>
			</ul>
		</div>
		<div id="AppBody">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		data: function(){
			return {}
		}
	}
</script>