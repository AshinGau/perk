<template>
	<div id="PerkUser">
		<div class="interval">
			<div class="text-center">
				<img v-if="user.img" :src="user.img" />
				<img v-else :src.literal="public/img/bg/portrait_default.png"  class="perk-portrait" />
			</div>
			<div class="text-center">
				<span class="text-muted">{{ user.name }}</span>
			</div>
		</div>	
		<div class="container">
			<h4 class="box-stress">基本信息</h4>
			<table class="table table-bordered">
				<tbody>
					<tr v-for="info in user.infos">
						<td>{{ info.field }}</td>
						<td>{{ info.content }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	//用户信息全局对象
	window._user_info_obj = {
		infos: [],
		img: '',
		name: ''
	};
	window._USER_INFO = function(res){
		var obj = window._user_info_obj;
		obj.img = res.profile.head_img;
		obj.name = res.profile.nick_name;
		obj.infos.push({ field: '姓名', content: res.profile.nick_name });
		obj.infos.push({ field: '学校', content: res.profile.school });
	}
	export default{
		data: function(){
			return {
				user: window._user_info_obj
			}
		}
	}
</script>