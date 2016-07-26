var Vue = require('./utils/vue.js'),
	VueRouter = require('./utils/vue-router.js'),
	VueResource = require('./utils/vue-resource.js'),
	$ = require('./utils/jquery.js');

window.Vue = Vue;
window.VueRouter = VueRouter;
window.VueResource = VueResource;
window.$ = $;

Vue.use(VueRouter);
Vue.use(VueResource);

import Skeleton from './Skeleton.vue';
import Article from './Article.vue';
import Message from './Message.vue';
import User from './User.vue';
import Comment from './Comment.vue';
import Reply from './Reply.vue';
import Login from './Login.vue';
import Regist from './Regist.vue';
import Edit from './Edit.vue';
import CommentTemplate from './CommentTemplate.vue';

Vue.component('perk-comment', Comment);
Vue.component('comment-template', CommentTemplate);

var router = new VueRouter();
var PerkApp= Vue.extend(Skeleton);
router.map({
	'/article': {
		component: Article
	},
	'/message': {
		component: Message
	},
	'/user': {
		component: User
	},
	'/article/reply': {
		component: Reply
	},
	'/user/login': {
		component: Login
	},
	'/user/regist': {
		component: Regist
	},
	'/user/edit': {
		component: Edit
	}
});

router.beforeEach(function (transition) {
	if (transition.to.path == '/user' && !window._auth) {
		//随便写的身份验证...
		router.go({ path: '/user/login' });
	}else{
		transition.next();
	}
})

router.start(PerkApp, '#PerkApp');