<template>
	<div id="PerkApp">
		<div id="PerkBody">
			<router-view keep-alive></router-view>
		</div>
		<div id="PerkMenu">
			<ul class="menu">
				<li>
					<a class="link-default" v-link="{ path: '/', exact: true }">
						<span class="icon icon-article">&nbsp;</span>
						<br/>
						<span class="text">文章</span>
					</a>
				</li>
				<li>
					<a class="link-default" v-link="{ path: '/message', exact: true }">
						<span class="icon icon-message">&nbsp;</span>
						<br/>
						<span class="text">消息</span>
					</a>
				</li>
				<li>
					<a class="link-default" v-link="{ path: '/user', exact: true }">
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
			return {}
		}
	}
</script>