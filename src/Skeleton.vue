<template>
	<div id="PerkApp">
		<div id="PerkBody">
			<router-view></router-view>
		</div>
		<div id="PerkMenu">
			<ul class="menu">
				<li>
					<a v-link="{ path: '/article' }">
						<span class="icon icon-article"></span>
						<span class="text">文章</span>
					</a>
				</li>
				<li>
					<a v-link="{ path: '/message' }">
						<span class="icon icon-message"></span>
						<span class="text">消息</span>
					</a>
				</li>
				<li>
					<a v-link="{ path: '/user' }">
						<span class="icon icon-user"></span>
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
			return {}
		}
	}
</script>