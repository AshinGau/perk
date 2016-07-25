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

Vue.component('perk-comment', Comment);

var router = new VueRouter();
var PerkApp= Vue.extend(Skeleton);
router.map({
	'/': {
		component: Article
	},
	'/message': {
		component: Message
	},
	'/user': {
		component: User
	}
});

router.start(PerkApp, '#PerkApp');